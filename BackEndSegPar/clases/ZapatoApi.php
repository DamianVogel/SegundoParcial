<?php
include_once "Zapato.php";

include_once "AutentificadorJWT.php";

class ZapatoApi {



public static function AltaZapato($request, $response, $args) 
{
             
    $objDelaRespuesta= new stdclass();
    
    $ArrayDeParametros = $request->getParsedBody();
    
    $codMod= $ArrayDeParametros['codMod'];
    $nombre= $ArrayDeParametros['nombre'];
    $fecIng = $ArrayDeParametros['fecIng'];
    $localVta= $ArrayDeParametros['localVta'];
    $precioCosto= $ArrayDeParametros['precioCosto'];
    $genero = $ArrayDeParametros['genero'];
    
    $zapato = new Zapato();

    $zapato->codMod= $ArrayDeParametros['codMod'];
    $zapato->nombre= $ArrayDeParametros['nombre'];
    $zapato->fecIng = $ArrayDeParametros['fecIng'];
    $zapato->localVta= $ArrayDeParametros['localVta'];
    $zapato->precioCosto= $ArrayDeParametros['precioCosto'];
    $zapato->genero = $ArrayDeParametros['genero'];


    

    $objDelaRespuesta->idinsertado = $zapato->GuardarZapato();


    return $response->withJson($objDelaRespuesta, 200);
            
}




public static function ListadoZapatos($request, $response, $args)
{
    $objDelaRespuesta=new stdclass();
       
    $objDelaRespuesta=Zapato::TraerTodosLosZapatos();

    return $response->withJson($objDelaRespuesta, 200);

}


public static function PrepararPedido($request, $response, $args)
{
    $respuesta=new stdclass();
    $ArrayDeParametros = $request->getParsedBody();
    $token=$ArrayDeParametros['token'];
    $payload=AutentificadorJWT::ObtenerData($token);
    $idEmpleado=$payload->idEmpleado;
    $idDetalle=$ArrayDeParametros['idDetalle'];
    $tiempoPreparacion=$ArrayDeParametros['tiempoPreparacion'];
    $tiempoPreparacion=$tiempoPreparacion;
    $ahora=date('Y/m/d G:i'); 
    $tiempo=strtotime($ahora. ' + '. $tiempoPreparacion . 'minutes');
    $miDetalle=new Detalle();
    $miDetalle->idDetalle=$idDetalle;
   $miDetalle->tiempoPreparacion=date('Y/m/d G:i',$tiempo);
   $miDetalle->idEmpleado=$idEmpleado;
   $miDetalle->estado="en preparacion";
   $respuesta=$miDetalle->PrepararDetalle();

   
    return $response->withJson($respuesta,200);

}

public static function ServirPedido($request, $response, $args)
{
    $respuesta=new stdclass();
    $ArrayDeParametros = $request->getParsedBody();
    $idDetalle=$ArrayDeParametros['idDetalle'];
    $tiempoServido=date('Y/m/d G:i');
    $miDetalle=new Detalle();
    $miDetalle->idDetalle=$idDetalle;
   $miDetalle->tiempoServido=$tiempoServido;
   $respuesta=$miDetalle->ServirDetalle();
   
    return $response->withJson($respuesta,200);

}

public static function TiempoRestante($request, $response, $args)
{
    $respuesta=new stdclass();
    $ArrayDeParametros = $request->getParsedBody();
    $idMesa=$ArrayDeParametros['idMesa'];
    $idPedido=$ArrayDeParametros['idPedido'];
    $detalles=Detalle::TraerDetalleDelPedido($idPedido);

    $ahora=date('Y/m/d G:i'); 

    $arrayRespuesta=array();

    foreach($detalles as $d)
    {
    if($d->estado=="en preparacion")
    {
        $detallesRespuesta= new stdclass();
    $tp=strtotime($d->tiempoPreparacion);
    $now=strtotime($ahora);
    $tiempoRestante=$tp-$now;
    $detallesRespuesta->idDetalle=$d->idDetalle;
    $detallesRespuesta->producto=$d->producto;
    
    $detallesRespuesta->tiempoRestante=date('i:s',$tiempoRestante);

    array_push($arrayRespuesta,$detallesRespuesta);
    }
    }
   
    
    $respuesta->pedido=$idPedido;
    $respuesta->detalles=$arrayRespuesta;

   
    return $response->withJson($respuesta,200);
}

public static function CancelarPedido($request, $response, $args)
{
    $respuesta=new stdclass();
    $ArrayDeParametros = $request->getParsedBody();
    $idPedido=$ArrayDeParametros['idPedido'];
    $respuesta= Detalle::CancelarDetalles($idPedido);
   
    return $response->withJson($respuesta,200);
}

public static function TraerCancelados($request, $response, $args)
{
    $respuesta=new stdclass();
    $respuesta= Pedido::PedidosCancelados();
   
    return $response->withJson($respuesta,200);
}



public static function TraerMasVendido($request, $response, $args)
{
    $respuesta=new stdclass();
    $respuesta= Pedido::MasVendido();
   
    return $response->withJson($respuesta,200);
}


public static function TraerMenosVendido($request, $response, $args)
{
    $respuesta=new stdclass();
    $respuesta= Pedido::MenosVendido();
   
    return $response->withJson($respuesta,200);
}


public static function NoEntregadosATiempo($request, $response, $args)
{
    $respuesta=array();
    $detalles= Detalle::TraerTodosLosDetalles();
    foreach($detalles as $d)
    {
        if(strtotime($d->tiempoServido) > strtotime($d->tiempoPreparacion))
        {
            array_push($respuesta, $d);
        }
    }

   
    return $response->withJson($respuesta,200);
}





}

?>