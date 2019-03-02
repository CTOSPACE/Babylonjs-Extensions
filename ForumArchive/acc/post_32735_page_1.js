[{"Owner":"MackeyK24","Date":"2017-09-03T19:02:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey guys... I got yet another one...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am currently using an animation to control a curve... List call that animPosition... I encode root transform positions into the animation and the animation updates\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe animPosition.xyz from the BabylonAnimationKey... I use this to move the character... works great except my logic for when the animation loops (even with relative cycle mode)...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBasically if the animation controlling the animPosition rotates the chaterter 0 to 90 degrees... when the animation loops the values are the same as before it just loops to when replayed it SNAPS back to 0 and goes from 0 to 90... again...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I need is to offset so that when the animation loops a second time this values in the animation _t_Contribute_t_ to the move of the character movement so when looping that animation with the sample numbers again a second time will make go from 90  - 180 and so on... so that values coming from the root motion accumulated (I guess)_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy animation state machine exposes that _t_animated animPosition_t_ as rootPosition and calculates the delta from the lastPostion... and it is exposed as_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tgetDeltaPosition... that little bit off delta position is then use to move the character... _chacter.move() really call physicsImposter.setLinearVelocity\n_lt_/p_gt_\n\n_lt_p_gt_\n\tanyways this is how I am taking the _t_delta from the last position and using that as movement_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_if (this._animator !_eq_ null) {\n    var deltaTime_dd_number _eq_ this.manager.deltaTime_sm_          \n    var deltaPosition_dd_BABYLON.Vector3 _eq_ this._animator.getDeltaPosition()_sm_\n    var rootPosition_dd_BABYLON.Vector3 _eq_ this._animator.getRootPosition()_sm_\n    if (this._character !_eq_ null) {\n        this._inputVelocity.x _eq_ (deltaPosition.x * this.moveSpeed) / deltaTime_sm_\n        this._inputVelocity.y _eq_ 0.0_sm_\n        this._inputVelocity.z _eq_ (deltaPosition.z * this.moveSpeed) / deltaTime_sm_\n\n        var jumped_dd_boolean _eq_ (this.manager.getKeyInput(this.keyboardJump) || this.manager.getButtonInput(this.buttonJump))_sm_\n        if (jumped _eq__eq__eq_ true) this._inputVelocity.y _eq_ this.jumpForce_sm_\n\n        this._character.move(this._inputVelocity_co_ jumped)_sm_\n    }\n}\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthat moves everything great UNTIL the animation loop that resets the main animPosition (that delta is calculated from) to the values in the animation at starting frame... lets say for simple sake that is facing forward with no rotation.. call it 0... when the animation stops its at 90... the loop reset back to zero INSTEAD of continuing to turn to 180 (which is what I want)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI know that a mouth full _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBut if can figure this last part out... I will have root motion working for BabylonJS...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote_dd_ If anybody wants to help with issue (Animation State) or any of the other small issues I have outstanding... LET ME KNOW... I will send you a copy of the BabylonJS Toolkit Version 3.1 Beta and we can work together...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would love to be able to work with (and actually talk to) someone... We can GOTOMeeting and show each other code pieces and work on it together....\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOutstanding Issues_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Animation System (including Blend Trees if can be done in BabylonJS)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Terrain System... Need to be able to use a Texture Atlas in GLSL Shader... right now the only way I know is to use _t_fract_t_ call... but that LEAVES EDGE SEEMS\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- LDR Skyboxes - you can_t_t really use a HDR for the whole sky... (maybe for just HDR reflections which should be a MUCH smaller scaled down version of a full panorama HDR file)... So I created a HDR to LDR Tone Mapping Tool... To use it I need a babylonLDRCubeTexture.ts to be create that work like HDRCubeTexture EXPECT use the ALREDY encoded LDR Tone Mapped pixels as a JPG or PNG.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tParticle System - Fine tune my ShurikenParticleSystem class I created to give a Shurken time based particle system ike the used in Unity... I got everything going except some _t_Update-Over-Time_t_ functionally I need to give additional _t_Velocity_t_ to the _t_AGED_t_ particle over time... NOT just adjust the _t_EMITTER POWER_t_ which starts the particle on it way... but use a curve to control the velocity of the particle over time... I think it uses a property called _t_Age_t_ for that... So let say 5 seconds into the particle system playing I was to start giving a velocity that might adjust a partialce that Is going start up... to start going left... But not at the emitter... once the particle has left the emitter and is 5 sec into its life... or what ever the curve is keyed to.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyways... Let me know if anybody can help with those outstanding issues I need to clear up before release the version 3.1 of the BabylonJS Toolkit _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-09-04T06:22:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have a PG that continuously rotates 90° as separate animations_co_ but it_t_s not likely what you are after.  The idea is that I recreate the animation taking current rotation and increase from there.  I think you said you were baking all your animations from the start together_co_ so what if you had all 4 animations ({0-90}_co_{90-180}_co_{180-270}_co_{270-0} and just ran the 1/4 that you needed?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is my PG - a keen eye will notice that it_t_s only working because of the timing as the plane physics impostors are sleeping during rotation_co_ so that_t_s why I think may not be helpful_co_ but at least you can see one way.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#58SJXF%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#58SJXF#3_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]