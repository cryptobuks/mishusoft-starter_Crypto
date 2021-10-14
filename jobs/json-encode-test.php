<?php

//[]
//['test','test1','test2','test3'];
//['test','test1','test2','test3'=>'test3value'];
//['test1'=>'test1value', 'test2'=>['test2key'=>'test2keyvalue']]
//['test1'=>['test1'=>'test1value', 'test2'=>['test2key'=>'test2keyvalue']],
// 'test2'=>['test1'=>'test1value', 'test2'=>['test2key'=>'test2keyvalue']]]

//        $array = ['test','test1','test2','test3', 5, "▇"];
//        $array2 = ['test','test1','test2','test3'=>['test','test1','test2','test3'],'test4'=>true];
//        $array3 = ['test1'=>['test1'=>'test1value', 'test2'=>['test2key'=>'test2keyvalue']],
//            'test2'=>['test1'=>'test1value', 'test2'=>['test2key'=>'CreateNewDoc()']], ];
//        $array4 = ['test1'=>['test1'=>'test1value', 'test2'=>['test2key'=>'test2keyvalue']],
//            'test2'=>['test1'=>'test1value', 'test2'=>['test2key'=>'http://localhost:8080']], ];
//        $array5 = ['test1'=>['test1'=>'test1value', 'test2'=>['test2key'=>-122.6438]],
//            'test2'=>['test1'=>0.54264448532277, 'test2'=>['test2key'=>'http://localhost:8080']], ];
//        $array6 = [['test1'=>['test1'=>'test1value', 'test2'=>['test2key'=>-122.6438]],
//            'test2'=>['test1'=>0.54264448532277, 'test2'=>['test2key'=>'http://localhost:8080']], ]];


//Debug::preOutput(json_encode('$array'));
//Debug::preOutput(json_decode(json_encode('$array')));
//Debug::preOutput(json_encode(1));
//Debug::preOutput(json_decode(json_encode(1)));
//Debug::preOutput(json_encode('$array'));

//        Debug::preOutput('Encoding');
//        Debug::preOutput('Decoding');
//        Debug::preOutput(json_encode($array));
//        //Debug::preOutput(Implement::arrayToJson($array));
//        Debug::preOutput(Implement::toJson($array));
//        Debug::preOutput(json_decode(json_encode($array)));
//        Debug::preOutput(Implement::jsonDecode(Implement::toJson($array)));
//        Debug::preOutput('');
//
//        Debug::preOutput(json_encode($array2));
//        //Debug::preOutput(Implement::arrayToJson($array2));
//        Debug::preOutput(Implement::toJson($array2));
//        Debug::preOutput(json_decode(json_encode($array2)));
//        Debug::preOutput(Implement::jsonDecode(Implement::toJson($array2)));
//        Debug::preOutput('');
//
//        Debug::preOutput(json_encode($array3));
//        //Debug::preOutput(Implement::arrayToJson($array3));
//        Debug::preOutput(Implement::toJson($array3));
//        Debug::preOutput(json_decode(json_encode($array3)));
//        Debug::preOutput(Implement::jsonDecode(Implement::toJson($array3)));
//        Debug::preOutput('');
//
//        Debug::preOutput(json_encode($array4));
//        //Debug::preOutput(Implement::arrayToJson($array4));
//        Debug::preOutput(Implement::toJson($array4));
//        Debug::preOutput(json_decode(json_encode($array4)));
//        Debug::preOutput(Implement::jsonDecode(Implement::toJson($array4)));
//        Debug::preOutput('');
//
//        Debug::preOutput(json_encode($array5));
//       // Debug::preOutput(Implement::arrayToJson($array5));
//        Debug::preOutput(Implement::toJson($array5));
//        Debug::preOutput(json_decode(json_encode($array5)));
//        Debug::preOutput(Implement::jsonDecode(Implement::toJson($array5)));
//        Debug::preOutput('');
//
//        Debug::preOutput(json_encode($array6));
//        //Debug::preOutput(Implement::arrayToJson($array6));
//        Debug::preOutput(Implement::toJson($array6));
//        Debug::preOutput(json_decode(json_encode($array6)));
//        Debug::preOutput(Implement::jsonDecode(Implement::toJson($array6)));
//        Debug::preOutput('');
//