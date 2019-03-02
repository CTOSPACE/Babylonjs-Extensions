[{"Owner":"FabAlter","Date":"2017-12-21T14:57:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have created a custom shader ( BABYLON.ShaderMaterial ) that needs to update an uniform value (time) in the runRenderLoop.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI created a camera with _dd_ var vrHelper _eq_ scene.createDefaultVRExperience()_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I use the non VR camera everything is fine_co_ but when I switch to the VR camera_co_ the rendering freeze.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I comment in the code below the line _dd_ my_material.setFloat(_qt_time_qt__co_ time)_sm_  then it renders normally in VR as well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt looks that updating a uniform value of a shader does not work in VR or has to been done differently ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar my_materials _eq_ scene.materials_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t// Render\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar time _eq_ 0_sm__lt_br /_gt_\n\tengine.runRenderLoop(function () _lt_br /_gt_\n\t{\n_lt_/p_gt_\n\n_lt_p_gt_\n\t            for (var i _eq_ 0_sm_ i &lt_sm_ my_materials .length_sm_ ++i)_lt_br /_gt_\n\t            {\n_lt_/p_gt_\n\n_lt_p_gt_\n\t                  if (my_material !_eq_ undefined)_lt_br /_gt_\n\t                  {_lt_br /_gt_\n\t                        my_material.setFloat(_qt_time_qt__co_ time)_sm_ //If this line is commented work both in VR and non VR_lt_br /_gt_\n\t                  }\n_lt_/p_gt_\n\n_lt_p_gt_\n\t             }\n_lt_/p_gt_\n\n_lt_p_gt_\n\t             time +_eq_ engine.getDeltaTime()/1000_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t            scene.render()_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t}\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the help_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFabien\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-21T17:43:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThere should be no difference. Can you repro in the PG?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]