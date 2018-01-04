#pragma strict

@script ExecuteInEditMode();

private var anim : Animation;

private var loops  : String[]=["loop_idle", "loop_run_funny", "loop_walk_funny", "loop_walk_side"];
private var combos : String[]=["cmb_agressive_punch", "cmb_deflective", "cmb_dragon_revenge", "cmb_Muay_knee", "cmb_street_fight", "cmb_zaratozom"];
private var kick   : String[]=["kick_crouch_left", "kick_hi_left", "kick_jump_right", "kick_jump_spin", "kick_lo_right", "kick_mid", "knee_mid"];
private var punch  : String[]=["punch_hi_left", "punch_hi_right", "punch_hi_spin", "punch_mid_left", "punch_slam"];
private var rest   : String[]=["def_crouch", "def_head", "final_head", "grab_mid", "jump", "wpn_right_fwd", "xhit_body", "xhit_head", "xhit_legs"];





function Start () {
	anim=GetComponent (Animation);

	anim["loop_run_funny"].speed=4.0;
	anim["kick_hi_left"].speed=1.6;
	anim["kick_jump_spin"].speed=1.6;
}




function OnGUI () {

	CategoryView ("loops", loops, 10);
	CategoryView ("combos", combos, 170);
	CategoryView ("kicks", kick, 330);
	CategoryView ("punches", punch, 490);
	CategoryView ("the rest", rest, 650);
}




function CategoryView (nme:String, cat:String[], x:int) {
	GUI.Box (Rect(x,10,150,25), nme);
	for (var i:int=0; i<cat.Length; i++) {
		if (GUI.Button (Rect(x, 35+(25*i), 150, 25), cat[i]) ) {
			
			GoAnim (cat[i]);
		}
	}

}



function GoAnim (nme:String) {

	anim.CrossFade (nme);

	while (anim.IsPlaying) {
		// do nothing
		yield;
	}

	anim.CrossFade ("loop_idle");
}