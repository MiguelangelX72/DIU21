/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
				Id: 0,
				Name: "Teresa Mujica",
                Photo: "teresa.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Despues de 2 años sin poder viajar por causas economicas, por fin tiene la posibilidad de empezar a cumplir su sueño de viajar por el mundo.",
                touch1: "agenda",
                feel1: "5",
                con1: "Dura unas cuantas horas organizando los preparativos para permitirse unos días de vacaciones.",
                ima1: "cartoon-happy.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Emocionada empieza a contarle a sus amigos por telefono buscando que le den ideas de que hacer",
                touch2: "móvil",
                feel2: "4",
                con2: "Despues de unas cuantas llamadas, una de sus amistades le da la idea perfecta de realizar una rutas de los vinos por algun lugar de Andalucia",
                ima2: "cartoon-phone-sitting.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide buscar un sitio web lo que le aconsejo su amistad a traves de Google hasta dar con una opcion de viaje que le guste.",
                touch3: "ordenador",
                feel3: "3",
                con3: "Pasa un largo rato para que de con un sitio que le guste, la mayoria tienen una interfaz que se le hace dificil de entender o no tienen disponibilidad en esta epoca por la pandemia.",
                ima3: "cartoon-PChard.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Le llama la atencion la pagina rutadelosvinosdegranada.com por el buscador de lugares que posee donde puede ver que ruta tomar en su coche. Asi que decide empezar a buscar una ruta",
                touch4: "ordenador",
                feel4: "4",
                con4: "No dura mucho en buscar informacion, precios y rutas que se ven bastante llamativas",
                ima4: "cartoon-PCSurprised.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encuentra unas cuantas opciones que le convence y decide quedarse con rutas que realizara cada dia",
                touch5: "ordenador",
                feel5: "4",
                con5: "Le cuesta un poco organizar el orden que deberia de hacer las rutas, pero al cabo del tiempo decide hacerlo desde la mas cercana a la mas lejana de Sevilla",
                ima5: "cartoon-deciding2.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Realiza la reserva de estas y espera entusiasmada al dia de inicio",
                touch6: "ordenador",
                feel6: "5",
                con6: "No había disponibilidad para empezar el mismo dia que sus vacaciones pero decidad darse un paseo por su ciudad ese día",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Luis Eduardo",
                Photo: "luisEduardo.jpg",

				 /*** PASO #1: INSPIRACION ***/
                goal1: "Quiere realizar un tour de cata de vinos por Granada. Dispone de 7 dias libres ",
                touch1: "agenda",
                feel1: "5",
                con1: "Quiere disponer de tiempo para visitar los monumentos más importantes de Granada ",
                ima1: "cartoon-going.png",

                /*** PASO #2: DECICION ***/
                goal2: "Consulta en internet las diferentes rutas y accede a la pagina web(rutadelosvinosdegranada.com)",
                touch2: "Servicio (web_online)",
                feel2: "2",
                con2: "Inicialmente consulta las distintas web/empresas que ofrecen el servicio para obtener información, hasta encontrar dicha web tiene muchos problemas para encontrar información de referencia debido a ser un usuario inexperto",
                ima2: "cartoon-PCangry.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Tras registrarse, la web le informa sobre los distintos Private Tour de los que disponen en Granada",
                touch3: "Web (Email)",
                feel3: "5",
                con3: "No encuentra con claridad desde que punto es recogido para iniciar la ruta",
                ima3: "cartoon-PCSurprised.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Busca que tipos de tour se adaptan más a sus gustos y donde se alojará",
                touch4: "Móvil (webapp)",
                feel4: "3",
                con4: "Los tour no disponen de alojamiento por lo que necesitará contactar a través de whatsapp/telefono que alojamientos son los más cercanos a cada ruta",
                ima4: "cartoon-phoning.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Reserva a traves de la web y realiza el pago",
                touch5: "PC (web)",
                feel5: "3",
                con5: "No encuentra ningun conflicto debido a que la datos solicitados son los correctos y dispone de gran variedad de métodos de pago",
                ima5: "cartoon-PChappy.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Consigue hacer la reserva y le pago, pero ve que se ha equivocado al escoger la ruta",
                touch6: "Ordenador (reserva OK)",
                feel6: "1",
                con6: "Tendrá que volver a contactar(ya que no permite modificar la reserva una vez realizado el pago) con atencion al cliente",
                ima6: "cartoon-PCcrying.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



