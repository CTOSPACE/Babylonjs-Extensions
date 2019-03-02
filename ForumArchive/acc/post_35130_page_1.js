[{"Owner":"ozRocker","Date":"2018-01-17T11:06:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI can_t_t get importmesh to acknowledge my morph targets.  They turn out as NULL.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut if I use BABYLON.SceneLoader.Load the morph target is there.  Am I doing something wrong or is the morph target code missing from importmesh?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is the playground I_t_m working on_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#BDG7ME%237_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#BDG7ME#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI should have a pouting morph target for the girl_t_s face.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-01-17T11:17:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tImportMesh loads only one mesh_co_ morph contains several meshs.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think that_t_s why.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUse Append that does like ImportMesh rather than Load that only loads a scene\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2018-01-17T12:23:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_201696_qt_ data-ipsquote-contentid_eq__qt_35130_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1516187861_qt_ data-ipsquote-userid_eq__qt_5292_qt_ data-ipsquote-username_eq__qt_Dad72_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ Dad72 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tImportMesh loads only one mesh_co_ morph contains several meshs.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI think that_t_s why.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tUse Append that does like ImportMesh rather than Load that only loads a scene\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYou_t_re right!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk_co_ I used Append and that fixed it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#BDG7ME%238_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#BDG7ME#8_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(yep_co_ there are still some other problems I_t_m fixing)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]