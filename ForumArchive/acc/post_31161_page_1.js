[{"Owner":"ua4192","Date":"2017-06-19T18:00:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs it possible to compute the real volume (not bounding box based) or the meshes I am importing in GLTF files?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have read it is possible to do it from vertix buffer\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBest regards.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-06-20T17:51:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tInteresting question! Mathematically possible but not straightforward. Might play with it over the next week or so_co_ unless somebody already has the answer.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-06-20T18:56:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf I remember well my distant physics classes_co_ you might find the derivative function of an elementary delta in your volume and then use an integral ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNot that easy when the volume has no predefined or known shape.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe another approach assuming the volume is _lt_s_gt_concave_lt_/s_gt_ convex (the barycenter is _qt_inside_qt_ the mesh and all the tetrahdrons are _qt_inside_qt_ the mesh) _dd_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tcompute the barycenter position\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthen from each mesh facet_co_ compute the volume of each pyramid (tetrahedron) based on the facet triangle with the barycenter as the summit\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf the volume is not concave_co_ split it into many _lt_s_gt_concave_lt_/s_gt_ convex ones and iterate the former process\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ua4192","Date":"2017-06-21T16:40:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMany thanks for your support. Due to the big amount of meshes I have decidef to discard this option and use bounding box volume instead.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow after reading some docs I understand the problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBest regards.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]