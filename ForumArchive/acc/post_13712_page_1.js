[{"Owner":"vahith","Date":"2015-04-08T14:01:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_hi all_lt_br_gt_is it possible to apply backFaceCulling true..? if possible... how we can apply_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-04-08T14:26:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_So you have a camera inside the cube?  BackFaceCulling is part of the material and IS true by default. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you really are asking how to set it to false_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var mat _eq_ new BABYLON.StandardMaterial(_qt_name_qt__co_ scene)_sm_mat.backFaceCulling _eq_ false_sm__lt_/pre_gt__lt_p_gt_If you will only ever be on the inside_co_ and you know blender_co_ I suggest getting a cube then flipping the normals_co_ so the inside is the front side.  painting 12 nu-neccesary faces is not a big deal though. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"vahith","Date":"2015-04-08T14:52:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_hi jc_sm__lt_/p_gt__lt_p_gt_thanks for response.. _dd_-)_lt_br_gt_i applied material backfaceculling false also but it visible.. what i want to achieve is when we apply _lt_span_gt_backFaceCulling _lt_/span_gt__lt_span_gt__eq__lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span_gt_false to plane_co_ it will not visible its back face right.. like that_co_ i need in box also is it possible..?_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-04-08T15:25:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_first thing we need to get straight here is what is culling.  It means do NOT draw.  Setting to false means it IS drawn.  If you do not want the backside of something drawn_co_ leave it at the default of true._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_2nd thing is how are you seeing a material on the inside of a cube?  An outside face is always going to be drawn._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-04-08T16:04:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/page.php?p_eq_22011_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/page.php?p_eq_22011_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_please read the _lt_em_gt_Side Orientation_lt_/em_gt_ part_lt_/p_gt__lt_p_gt_you can have your cam inside the cube !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"vahith","Date":"2015-04-11T05:37:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_thank jc and jerome.._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]