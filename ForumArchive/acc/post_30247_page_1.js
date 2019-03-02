[{"Owner":"jdurrant","Date":"2017-05-06T06:32:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m using the preview release of Babylon (3.0. alpha) and the 5.3.-1 exporter in Blender. The Blender scene includes shape keys attached to a mesh called _qt_Cloth_qt__dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12865_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_05/1.png.7e11648e97dc1a93e81474b0998a31e8.png_qt_ alt_eq__qt_1.png.7e11648e97dc1a93e81474b0998a31e8.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I export to a babylon file_co_ this information appears to be saved correctly. There is a _qt__lt_span_gt_MorphTargetManager_qt_ entry in the file JSON that looks like this_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt__qt_MorphTargetManager_qt__dd_ {\n    _qt_id_qt__dd_ _qt_Cloth_qt__co_\n    _qt_targets_qt__dd_ [\n        {\n            _qt_name_qt__dd_ _qt_Draped_qt__co_\n            _qt_position_qt__dd_ [lots of numbers...]_co_\n            _qt_influence_qt__dd_ 0\n        }_co_\n        {\n            _qt_name_qt__dd_ _qt_testtest_qt__co_\n            _qt_position_qt__dd_ [lots of numbers...]_co_\n            _qt_influence_qt__dd_ 0\n        }\n    ]\n}\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI then load the babylon file with BABYLON in the browser_co_ but I can_t_t for the life of me figure out how to access this saved MorphTargetManager.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere are some things I tried_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBABYLON.scene.morphTargetManagers_sm_ _eq__eq_&gt_sm_ []\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBABYLON.scene.getMorphTargetManagerById(_qt_Cloth_qt_)_sm_ _eq__eq_&gt_sm_ null\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBABYLON.scene.getMorphTargetManagerById(0)_sm_ _eq__eq_&gt_sm_ null\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(After setting the _qt_Cloth_qt_ mesh to clothMesh...)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tclothMesh.morphTargetManager_sm_ _eq__eq_&gt_sm_ undefined (but present when I inspect the mesh object...)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI feel like all the parts are there_co_ I just can_t_t figure out how to access the MorphTargetManager that I think should be present when I import the babylon file. Any help you can offer would be appreciated! Thanks!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-05-08T15:11:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDo not really know how to access them_co_ but would suggest calling through mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is implemented wrong.  I am placing this inside of a meshes tags.  A morphTargetmanager is a high level thing within the JSON file_co_ and then leashed up to a mesh.  This is very different from my implementation of shapekeys.  The export design will need to  change.  Thanks for testing.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jdurrant","Date":"2017-05-08T15:15:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for your help_co_ JCPalmer. Just to clarify_co_ you mean I should save the different shape keys as separate meshes (in blender) and then programmatically create a morphTargetManager? Can you provide a code outline?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ would you mind pointing me in the direction of your implementation of shapekeys? It seems the one I_t_m using now isn_t_t ready for prime time. Thanks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-05-08T15:41:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNo_co_ you should not need to anything differently to the blend.  I was speaking of the JSON organization.  My implementation though farther along in the morph area is an completely different animation system_co_ wiith its own workflow &amp_sm_ dynamic deployment using computer generated Javascript. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is undergoing a bunch of changes that I am just finalizing to allow geometry &amp_sm_ texture read ahead.  I am think to be done around June 1st.  Will be beginning network testing of a scene this week.  Will post on demos section as completed.  Will not get to changing anything for the JSON implementation till this milestone is achieved_co_ (plus I do not know what to do yet).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-05-16T17:44:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13453-jdurrant/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13453-jdurrant/_qt_ rel_eq__qt__qt__gt_@jdurrant_lt_/a_gt_with my scene posted on demos_co_ I changed the .JSON exporter to deal with morph targets properly.  I ran the flying carpet test scene through the sandbox.  I know morph targets is now getting parsed_co_ since I had a spelling of a property wrong_co_ and it failed at first.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI PR_t_ed but with Deltakosh on vacation_co_ you could just pull the zip file from my _lt_a href_eq__qt_https_dd_//github.com/Palmer-JC/Babylon.js/blob/master/Exporters/Blender/Blender2Babylon-5.3.zip_qt_ rel_eq__qt_external nofollow_qt__gt_repo_lt_/a_gt_.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"voggu kalyan","Date":"2017-06-27T13:36:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\ta small doubt\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\thow to get morph targets from shape keys.\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti had made a blender human model and i used shape keys for it .when i exported i didn_t_t get the vertices _co_ but i got the array. can you help me.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_13616_qt__gt_human.blend_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]