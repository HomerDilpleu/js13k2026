//////////////////////////////
// Create the instruments
//////////////////////////////
game.instruments.arpegiator = mge.game.createSynthetizer([{"_volumeADSR":{"a":0.005,"d":0.15,"s":0.3,"r":0.1,"minValue":0,"maxValue":1},"_filterADSR":{"a":0.02,"d":0.12,"s":0.25,"r":0.08,"minValue":1800,"maxValue":2200},"_reverb":{"_delay":0.1,"_feedbackLevel":0.5}},{"_volumeADSR":{"a":0.005,"d":0.15,"s":0.3,"r":0.1,"minValue":0,"maxValue":0.7},"_detuneADSR":{"a":0,"d":0,"s":1,"r":0,"minValue":3,"maxValue":3},"_filterADSR":{"a":0.02,"d":0.12,"s":0.25,"r":0.08,"minValue":1800,"maxValue":2200},"_reverb":{"_delay":0.1,"_feedbackLevel":0.5}}])

//////////////////////////////
// Create the tracks
//////////////////////////////
mge.sequencer.createTrack([["D2",4],["G2",4],["C2",4],["A2",4]],game.instruments.arpegiator,0.8)
mge.sequencer.createTrack([["A3",1,"C3",1,"A3",1,"C4",1],["B3",1,"D4",1,"B3",1,"D3",1],["E3",1,"G3",1,"E3",1,"G3",1],["C3",1,"B3",1,"C3",1,"B3",1]],game.instruments.arpegiator,0.8)
mge.sequencer.bpm = 120 