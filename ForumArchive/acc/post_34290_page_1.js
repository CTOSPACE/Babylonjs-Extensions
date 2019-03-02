[{"Owner":"Félix Flores","Date":"2017-11-29T18:19:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello again.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI continue develop a site with babylonjs_co_ but I have a few problems.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a scene created with blender_co_ I generate the babylon file_co_ the scene has some textures_co_ I converted the textures to a ktx format_co_ with the script in the babylon page. You can see the page in_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//entornomexicano.com/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//entornomexicano.com/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI import the scene with_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_if (!BABYLON.Engine.isSupported()){\n\t\tconsole.log(_qt_Motor no soportado_qt_)_sm_\n\t\treturn_sm_\n\t}\n\t\t\n\tcanvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_\n\tengine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\n\n\t// Asignamos los tipos de textura compimidos que se pueden usar\n\tvar available _eq_ [_t_-astc.ktx_t__co_ _t_-dxt.ktx_t__co_ _t_-pvrtc.ktx_t__co_ _t_-etc1.ktx_t__co_ _t_-etc2.ktx_t_]_sm_\n\tvar formatUsed _eq_ engine.setTextureFormatToUse(available)_sm_\n\n\tBABYLON.SceneLoader.Load(blendPath + _qt_scene1/_qt__co_ _qt_landScape.babylon_qt__co_ engine_co_ function (newScene) {\n\t\t// asignamos la escena\n\t\tscene _eq_ newScene_sm_\n\n\t\t// Creamos el entorno y las luces\n\t\tcreateSkybox(_qt_models/scene1/sky2.jpg_qt_)_sm_\n\t\tcreateWaterMesh(_qt_waterMesh_qt__co_ imgPath + _qt_waterbump.png_qt__co_ new BABYLON.Vector3(0_co_ -0.08_co_ 0)_co_ 6_co_ getMeshListToRender())_sm_\n\t\tcreateCamera(1_co_ new BABYLON.Vector3(-0.23_co_ 0.56_co_-2.73)_co_ new BABYLON.Vector3(0_co_ 0_co_ 0))_sm_ // arch camera\n\t\tcreateParticleSystem()_sm_\n\t\tcreateLights()_sm_\n\t\tcreateShadows()_sm_\n\t\tcreateVolumetricLightEffect()_sm_\n\t\tcreateActionsContollers()_sm_\n\t\n\t\t// Wait for textures and shaders to be ready\n\t\tscene.executeWhenReady(function () {\n\t\t\t// Quitamos la imagen del cargador cuando termine el proceso de carga\n\t\t\t$(_qt_#loaderPadre_qt_).remove()_sm_\n\n    \t\tscene.createOrUpdateSelectionOctree()_sm_\n\n\t\t\t// quitamos los calculos de los objetos para hacer mas eficiente la escena\n\t\t\tscene.meshes.forEach(function (mesh) {\n\t\t\t\tif(mesh.name.search(_qt_NO__qt_) _eq__eq__eq_ -1)\n\t\t\t\t\tmesh.freezeWorldMatrix()_sm_\n\t\t\t})_sm_\n\n\t\t\t// Funcion para cuando se redimensiona la ventana\n\t\t\t$(window).on(_t_resize_t__co_ function() {\n\t\t\t\tengine.resize()_sm_\n\t\t\t})_sm_\n\n\t\t\t// Once the scene is loaded_co_ just register a render loop to render it\n\t\t\tengine.runRenderLoop(function() {\n//\t\t\t\tconsole.log(engine.getFps())_sm_\n\t\t\t\tscene.render()_sm_\n\t\t\t})_sm_\n\t\t\t\n\t\t})_sm_\n\t}_co_ function (progress) {\n\t\tif(progress.total _eq__eq_ 0)\n\t\t\treturn_sm_\n\t\t$(_qt_.textoCarga_qt_).text( ((progress.loaded/progress.total)*100).toFixed(2) + _qt_%_qt_)_sm_\n\t})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIn the callback function I return the loadign progress_co_ but in some devices the progres is too slow_co_ and When I already have 100% the scene still takes time to show_co_ maybe i have doing some wrong. Somebody know_co_ What I can do for resolve that?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd other problem is the performance of the scene_co_ I rremoved some elements and I have down the quality of the shadows_co_ but the fps is 30_co_ How I can increase the speed?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe complete code is in_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/flelix/entorno-models.git_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/flelix/entorno-models.git_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tin the folder_dd_\n_lt_/p_gt_\n\n_lt_div_gt_\n\t_lt_div_gt_\n\t\t_lt_span_gt__lt_span_gt__lt_a href_eq__qt_https_dd_//github.com/flelix/entorno-models_qt_ rel_eq__qt_external nofollow_qt__gt__lt_span_gt_entorno-models_lt_/span_gt__lt_/a_gt__lt_/span_gt__lt_/span_gt__lt_span_gt_/_lt_/span_gt__lt_span_gt__lt_a href_eq__qt_https_dd_//github.com/flelix/entorno-models/tree/master/code_qt_ rel_eq__qt_external nofollow_qt__gt__lt_span_gt_code_lt_/span_gt__lt_/a_gt__lt_/span_gt__lt_span_gt_/_lt_/span_gt__lt_span_gt__lt_a href_eq__qt_https_dd_//github.com/flelix/entorno-models/tree/master/code/proyBabylon_qt_ rel_eq__qt_external nofollow_qt__gt__lt_span_gt_proyBabylon_lt_/span_gt__lt_/a_gt__lt_/span_gt__lt_span_gt_/_lt_/span_gt__lt_strong_gt_entorno_lt_/strong_gt__lt_span_gt_/_lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\there you can see the project.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope you can help me.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks and regards.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2017-11-30T03:15:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt is slow to load because your scene is pretty big (the network is mainly the bottleneck here). Once network step is over_co_ all the materials still have to compile and the entire scene need to prepare the webgl context.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tConcerning the speed_co_ you can find a lot of topic in the forum for this. Reduce your poly count_co_ try using instance_co_ prevent overdraw... and all the usual one_dd_ \n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed2329052132_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/22294-how-could-babylonjs-possibly-be-faster/?do_eq_embed_qt_ style_eq__qt_height_dd_207px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBTW_co_ the scene looks really good.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Félix Flores","Date":"2017-11-30T16:37:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for the answer_co_ I ´m using instances_co_ and for the models I reduced the resolution using mesh lab_co_ for the others objects I_t_m using planes with textures._lt_br /_gt_\n\tmaybe If I reduce the textures resolution.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2017-12-01T06:12:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/27863-f%C3%A9lix-flores/?do_eq_hovercard_qt_ data-mentionid_eq__qt_27863_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/27863-f%C3%A9lix-flores/_qt_ rel_eq__qt__qt__gt_@Félix Flores_lt_/a_gt_-\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is always better to separate your textures_co_ normal maps_co_ etc. to no larger than the largest render size in pixels. Also_co_ I always work in power of 2 textures_co_ as your GPU will render power of 2 much faster than non power of 2. But if your FPS is fine_co_ then this is not entirely necessary - although always good practice - especially for smartphones and GPU based devices. I_t_m sure you know_co_ but for those who may not - power of two is 16X16px_co_ 32X32px_co_ 64X64px_co_ 128X128px_co_ 256X256px_co_ 512X512px_co_ 1024X1024px_co_ etc. This is less GPU intensive and also helps optimize memory.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso take a look at your garbage collection_co_ as instancing varies by OS and browser_co_ and I often find that cloning works in my favor if I have many_co_ many instances which require animation. Consider if cloning might be a better solution - although cloning is generally better simply to allow flexability in animation and attributes such as textures and influencing elements such as shaders and lights. But this is all relative and extremely dependent on your specific meshes_co_ their attributes_co_ and the overall scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tKeep in mind that memory usage varies dramatically between browsers.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]