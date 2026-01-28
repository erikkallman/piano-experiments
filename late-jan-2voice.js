// experiments in arpeggiated voicings of interesting chord progressions.
// Dmaj Bbmaj Gm Am/C Bm F#m Gm Ebmaj Dmaj
// alternating single and double voicings in L/R hand divisions

setcps(40)
const v_accent = rand.range(0.55, 0.70)
const phase_length = 1032*4

const phase_1 = "<1 0 0 0>".slow(phase_length)
const phase_2 = "<0 1 0 0>".slow(phase_length)
const phase_3 = "<0 0 1 0>".slow(phase_length)
const phase_4 = "<0 0 0 1>".slow(phase_length)

const phase_1_2 = "<1 1 0 0>".slow(phase_length)
const phase_2_3 = "<0 1 1 0>".slow(phase_length)
const phase_3_4 = "<0 0 1 1>".slow(phase_length)
const phase_2_3_4 = "<0 1 1 1>".slow(phase_length)

const phase_all = "<1 1 1 1>".slow(phase_length)

// Left hand
$: note(cat(
  "d3 [a3,f#3] ~ [a3,f#3] d3 [a3,f#3] d3",
  "bb2 [f3,d3] ~ [f3,d3] bb2 [f3,d3] bb2",
  "g2 [d3,bb2] ~ [d3,bb2] g2 [d3,bb2] g2",
  "c3 [a3,e3] ~ [a3,e3] c3 [a3,e3] c3",
  "b2 [f#3,d3] ~ [f#3,d3] b2 [f#3,d3] b2",
  "f#2 [c#3,a2] ~ [c#3,a2] f#2 [c#3,a2] f#2",
  "g2 [d3,bb2] ~ [d3,bb2] g2 [d3,bb2] g2",
  "eb3 [bb3,g3] ~ [bb3,g3] eb3 [bb3,g3] eb3",
  "d3 [a3,f#3] ~ [a3,f#3] d3 ~ ~"
)).sound("piano")
  .velocity(rand.range(0.4, 0.6))
  .lpf(1500)
  .legato(2.8)
  //.room(0.2).size(0.1)
  .slow(63)
  .mask(phase_all)

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
  .lpf(1000)
  .legato(2.8)
  //.room(0.2).size(0.1)
  .slow(63)
  .mask(phase_all)

$: note(cat(
  "d5 ~ ~ ~ ~ ~ ~",
  "~ ~ ~ ~ ~ ~ ~",
  "bb4 ~ ~ ~ ~ ~ ~",
  "~ ~ ~ ~ ~ ~ ~",
  "f#4 ~ ~ ~ ~ ~ ~",
  "~ ~ ~ ~ ~ ~ ~",
  "g4 ~ ~ ~ ~ ~ ~",
  "~ ~ ~ ~ ~ ~ ~",
  "a4 ~ ~ ~ ~ ~ ~"
)).sound("piano")
  .velocity(v_accent)
  .lpf(3500)
  .room(0.6).size(0.7)
  .slow(63)
  .mask(phase_1)

$: note(cat(
  "d5 ~ ~ a4 ~ ~ f#5",
  "~ bb4 ~ ~ d5 ~ ~",
  "g4 ~ ~ bb4 ~ d5 ~",
  "~ ~ a4 ~ e5 ~ ~",
  "f#4 ~ ~ ~ b4 ~ d5",
  "~ c#5 ~ ~ a4 ~ ~",
  "bb4 ~ d5 ~ ~ g4 ~",
  "~ ~ eb5 ~ ~ bb4 g5",
  "a4 ~ ~ f#5 ~ ~ ~"
)).sound("piano")
  .velocity(v_accent)
  .lpf(3000)
  .room(0.5).size(0.6)
  .slow(63)
  .mask(phase_2)

$: note(cat(
  "d5 e5 f#5 ~ a5 ~ [f#5,d5]",
  "d5 ~ bb4 c5 d5 f5 ~",
  "g4 a4 bb4 ~ d5 bb4 g5",
  "a4 ~ c5 ~ e5 ~ a5",
  "f#4 ~ a4 b4 d5 ~ f#5",
  "c#5 ~ a4 ~ f#5 ~ c#5",
  "bb4 c5 d5 ~ g5 ~ bb4",
  "eb5 ~ g5 ~ bb5 g5 eb5",
  "[d5,f#5] ~ a5 ~ [f#5,a5] ~ ~"
)).sound("piano")
  .velocity(v_accent)
  .lpf(3500)
  .room(0.4).size(0.5)
  .slow(63)
  .mask(phase_3)
