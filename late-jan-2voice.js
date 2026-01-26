// experiments in arpeggiated voicings of interesting chord progressions.
// Dmaj Bbmaj Gm Am/C Bm F#m Gm Ebmaj Dmaj
// alternating single and double voicings in L/R hand divisions

setcps(30)

// Left hand
$: note(cat(
  "d3 [a3,f#3] ~ [a3,f#3] d3 [a3,f#3] d3",
  "bb2 [f3,d3] ~ [f3,d3] bb2 [f3,d3] bb2",
  "g2 [d3,bb2] ~ [d3,bb2] g2 [d3,bb2] ~",
  "c3 [a3,e3] ~ [a3,e3] c3 [a3,e3] ~",
  "b2 [f#3,d3] ~ [f#3,d3] b2 [f#3,d3] b2",
  "f#2 [c#3,a2] ~ [c#3,a2] f#2 [c#3,a2] f#2",
  "g2 [d3,bb2] ~ [d3,bb2] g2 [d3,bb2] ~",
  "eb3 [bb3,g3] ~ [bb3,g3] eb3 [bb3,g3] ~",
  "d3 [a3,f#3] ~ [a3,f#3] d3 ~ ~"
)).sound("piano")
  .velocity(rand.range(0.4, 0.6))
  .lpf(2500)
  .room(0.5).size(0.5)
  .slow(63)

// Right hand. inversions one octave up, offset pattern
$: note(cat(
  "~ f#4 [d4,a4] ~ f#4 [d4,a4] ~",
  "~ d4 [bb3,f4] ~ d4 [bb3,f4] ~",
  "~ bb3 [g3,d4] ~ bb3 [g3,d4] ~",
  "~ e4 [c4,a3] ~ e4 [c4,a3] ~",
  "~ d4 [b3,f#4] ~ d4 [b3,f#4] ~",
  "~ c#4 [a3,f#3] ~ c#4 [a3,f#3] ~",
  "~ bb3 [g3,d4] ~ bb3 [g3,d4] ~",
  "~ g4 [eb4,bb3] ~ g4 [eb4,bb3] ~",
  "~ f#4 [d4,a4] ~ ~ ~ ~ ~"
)).sound("piano")
  .velocity(rand.range(0.35, 0.55))
  .lpf(3000)
  .room(0.5).size(0.5)
  .slow(63)
