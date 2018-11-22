<?php

class Zapato
{
    public $id;
    public $codMod;
    public $nombre;
    public $fecIng;
    public $localVta;
    public $precioCosto;
    public $genero;

    
    public function GuardarZapato(){
    
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("INSERT into zapatos (codMod, nombre,fecIng,localVta,precioCosto,genero)values(:codMod, :nombre, :fecIng, :localVta, :precioCosto, :genero)");
        $consulta->bindValue(':codMod', $this->codMod, PDO::PARAM_STR);
        $consulta->bindValue(':nombre', $this->nombre, PDO::PARAM_STR);
        $consulta->bindValue(':fecIng', $this->fecIng, PDO::PARAM_STR);
        $consulta->bindValue(':localVta', $this->localVta, PDO::PARAM_INT);
        $consulta->bindValue(':precioCosto', $this->precioCosto, PDO::PARAM_STR);
        $consulta->bindValue(':genero', $this->genero, PDO::PARAM_STR);
        
        
        $consulta->execute();
        
        return $objetoAccesoDato->RetornarUltimoIdInsertado();
    }

    
    public static function TraerTodosLosZapatos() {
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
        	$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * from zapatos");  
        	$consulta->execute();
        	$zapatos= $consulta->fetchAll(PDO::FETCH_CLASS, "Zapato");
                    
            return $zapatos;									
        }

// public static function TraerTodosLasWebs() {
//     $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
// 	$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * from servicioweb");  
// 	$consulta->execute();
// 	$webs= $consulta->fetchAll(PDO::FETCH_CLASS, "Web");
            
//     return $webs;									
// }

// public static function TraerProducto($nombre) 
// {
//     $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
//     $consulta =$objetoAccesoDato->RetornarConsulta("SELECT * from productos WHERE nombre= :nombre ");  
//     $consulta->bindValue(':nombre', $nombre, PDO::PARAM_STR);
// 	$consulta->execute();
// 	$producto= $consulta->fetchObject('Producto');
            
//     return $producto;
									
// }

// public function BorrarProducto()
// {
//     $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
//     $consulta =$objetoAccesoDato->RetornarConsulta("
//         delete 
//         from productos 				
//         WHERE nombre=:nombre");	
//     $consulta->bindValue(':nombre',$this->nombre, PDO::PARAM_STR);		
//     $consulta->execute();
//     return $consulta->rowCount();
// }


// public function ModificarProducto()
// {

//     $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
//     $consulta =$objetoAccesoDato->RetornarConsulta("
//            update productos 
//            set precio='$this->precio'
//            WHERE nombre='$this->nombre'");
           
//     return $consulta->execute();

// }


}



?>