[{"Owner":"Vousk-prod.","Date":"2014-06-16T21:26:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi everyone_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The question is in the title _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-16T21:54:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_you can just call actionManager._lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_processTrigger(trigger)_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-06-21T15:29:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Interesting question_co_ Vousk-prod!  If I may_co_ I want to add a couple more questions for the experts..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The actionManager acts sort of like a patch panel. It is used to _t_wire_t_ or _t_attach_t_ a trigger... to an action.  Or in the case of using CombineAction... you can wire a trigger_co_ to MANY actions._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Question #1_dd_  For processTrigger(trigger)_co_ does the user need to create a fake trigger object... to use as the arg/parameter?  If so_co_ can you tell us how that is done?  Thanks._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Question #2_dd_  Would it be possible to do...  processAction(actionNumber).  Actions don_t_t have names_co_ but maybe all actions ARE... or some COULD BE... kept in an array.  Here_t_s an example_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var actionsArray _eq_ []_sm_actionsArray.push(new BABYLON.SetValueAction(BABYLON.ActionManager.NoneTrigger_co_ mesh.material_co_ _qt_wireframe_qt__co_ false))_sm_actionsArray.push(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.NoneTrigger_co_ light_co_ _qt_diffuse_qt__co_ BABYLON.Color3.Black()_co_ 1000))_sm_actionsArray.push(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.NoneTrigger_co_ camera_co_ _qt_alpha_qt__co_ 0_co_ 500_co_ new BABYLON.PredicateCondition(scene.actionManager_co_ function () { return light1.diffuse.equals(BABYLON.Color3.Red()_sm_ } )))_sm_// notice that all 3 are NoneTrigger... I think that would be a requirement.scene.actionManager.processAction(actionsArray[1])_sm__lt_/pre_gt__lt_p_gt_Essentially_co_ I was wondering if a registered action could be actuated... by calling it manually... without a trigger happening_co_ and without creating a fake trigger.  I don_t_t know if such a thing would ever be needed or useful.  I am just thinking of stupid stuff_co_ here.  I know there is no .processAction function... I went looking already. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I realize that the same thing could be done with the processTrigger function... IF the user knows how to create the correct fake trigger for its parameter._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I re-invite everyone to carefully read _lt_u_gt__lt_strong_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/How-to-use-Actions_qt_ rel_eq__qt_external nofollow_qt__gt_the actionManager tutorial_lt_/a_gt__lt_/strong_gt__lt_/u_gt_  and play around with _lt_u_gt__lt_strong_gt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/playground/?16_qt_ rel_eq__qt_external nofollow_qt__gt_the actionManager playground demo_lt_/a_gt__lt_/strong_gt__lt_/u_gt_.  There is a ton of things going-on in that demo.  Notice that clicking the sphere to rotate the camera to a new location... does not work if light #1 is set .diffuse black?  (toggled with a click on the red box)  Ain_t_t that cool?  Conditions! _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_At my request_co_ Deltakosh added more info to the actionManager tutorial... to teach us more about conditions.  He did it well_co_ and it helps show just how very powerful and versatile the actionManager really is.  It is an amazing device.  I would hate to meet one in a dark alley_co_ because it would be a mighty machine... with many robotic arms_co_ levers_co_ knobs_co_ pistons_co_ actuators_co_ wheels_co_ and smoke stacks.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-21T16:11:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1.You can call it like this for instance_dd_ _lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_pickResult_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_pickedMesh_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_actionManager_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_processTrigger_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_BABYLON_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_ActionManager_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_OnPickTrigger_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_ActionEvent_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_CreateNew_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_pickResult_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_pickedMesh_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_))_sm__lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm__qt__gt_2. AN individual ACtion can be called like this_dd_ action.execute()_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2014-06-21T21:05:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wow_co_ action.execute() is a very valuable thing !!_lt_/p_gt__lt_p_gt_But for the 1st point I absolutly do not get for what purpose this could be used _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]