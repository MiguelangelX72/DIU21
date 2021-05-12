/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
				Id: 0,
				Name: "Teresa Mujica",
				Photo: "teresa.jpg",
				Quote: "Toda la vida es un sueño. Y los sueños, sueños son.",
				Age: 23,
				Occupation: "Fotógrafa",
				Family: "2 años de experiencia",
				Location: "Sevilla",
				Character: "Le gusta conocer nuevos lugares",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 5 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Viajar a a todos los sitios turísticos mas famosos", "trabajar en el mundo del cine como 'Directora de Fotografía'"],
				Frustrations: ["le cuesta organizar un calendario efectivo entre su tiempo laboral y su tiempo de ocio", "Le gustaría tener más tiempo libre y leer más"],
				Bio: "Nacida en Guayaquil, Ecuador. Decidio estudiar en el extranjero en la Universidad de Sevilla. Al graduarse consiguio un contrato de trabajo como asistente en un estudio fotográfico pero de vez en cuando recibe pedidos puntuales. Despues de dos años trabajando en el estudio, llego al puesto principal de este lo que le permitio un sueldo estable y por fin poder cumplir su sueño de viajar por el mundo. Esta empezaría organizando unas vacaciones a un sitio cercano",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 4 }
					
				], 
                Contextos: "LLeva un tiempo sin la posibilidad de darse unas vacaciones. Ahora que tiene estabilidad economica, aprovechará la oportunidad",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Luis Eduardo",
				Photo: "luisEduardo.jpg",
				Quote: "Si la vida te da limones, haz limonada",
				Age: 60,
				Occupation: "Gestor procesal ",
				Family: "Casado, con 3 hijos",
				Location: "Madrid",
				Character: "Disfruta del tiempo junto a su familia.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 5},
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				],
				Goals: ["Llegar a ser juez"],
				Frustrations: ["Disponer de mayor tiempo libre, para dedicarse a su otra gran pasion, tocar el piano","No tener la potestá de cambiar alguna de las leyes"],
				Bio: "Nacio en Sevilla y fue a Madrid para realizar sus estudios en Derecho, durante 10 años ha ejercido como abogado en Sevilla y finalmente es Gestor Procesal como funcionario de carrera en Madrid, donde conoció a su actual mujer",
				Tech: [
					{ Name: "Civil", Value: 4 },
					{ Name: "Penal", Value: 5 },
					{ Name: "Laboral", Value: 3 },
					{ Name: "Mercantil", Value: 4 }

				],
                Contextos:   "Lleva planeando un viaje con sus hijos y mujer a Londres desde hace un año" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 2 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])