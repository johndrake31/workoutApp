import { IWorkout } from '../../interfaces/ISport';
import squatBB from '../images/rinke-dohmen-NzP0AXtJqII-unsplash.jpg';
import rowDB1 from '../images/tony-woodhead-kYdkUweH8QU-unsplash.jpg';
import rowDBalt2 from '../images/lorenzo-hamers-jvIaut-V9a4-unsplash.jpg';
import rowDBalt3 from '../images/alora-griffiths-LOnMc8Rp1Qs-unsplash.jpg';
import plank from '../images/gordon-cowie-ISg1JhN_vFk-unsplash.jpg';
import militaryPressDB from '../images/elias-vicario-xLPtz3hC2x4-unsplash.jpg';
import triPressDown from '../images/daniel-apodaca-WdoQio6HPVA-unsplash.jpg';
import lunges from '../images/big-dodzy-gTTtXwqmKPQ-unsplash.jpg';
import curlsBB from '../images/anastase-maragos-7kEpUPB8vNk-unsplash.jpg';
import benchPressBB from '../images/alora-griffiths-V3GnMeRhnjk-unsplash.jpg';
import shrugsDB from '../images/aaron-brogden-miCR9VIQ5PE-unsplash.jpg';
import deadliftBB from '../images/victor-freitas-WvDYdXDzkhs-unsplash.jpg';
import rearDeltFly from '../images/gordon-cowie-7oPvdWF9gi0-unsplash.jpg';
import calfRaisesBW from '../images/calf-raise.jpeg';
import reelTim from '../images/reeltim.jpeg';
import reardeltflies from '../images/reardeltflies.jpg';
import dips from '../images/dips.jpg';
import pullover from '../images/pullover.png';
import ecartes from '../images/ecartes.jpg';


export const workoutSamples: IWorkout[] = [
  // worout 1
  {
    _id: '1',
    mainTitle: 'Pre-Phase',
    weekDuration: [3],
    imgUrl:
      'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    discriptionShort: 'Build overall strength and muscle & prepare for Phase I',
    discriptionExtra:
      'Better coordination, increased strength, correction of muscle imbalances and improvement in exercise form.',
    exercises: [
      {
        title: 'Barbell Squats',
        sets: [2],
        reps: [12, 16],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: squatBB,
      },
      {
        title: 'Walking Lunges',
        sets: [1],
        reps: [16, 20],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: lunges,
      },
      {
        title: 'Barbell Deadlift',
        sets: [1],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: deadliftBB,
      },
      {
        title: 'Barbell Bench Press',
        sets: [2],
        reps: [12, 16],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: benchPressBB,
      },
      {
        title: 'Dumbbell Rows',
        sets: [2],
        reps: [12, 16],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: rowDB1,
      },
      {
        title: 'Dumbbell Shrugs',
        sets: [2],
        reps: [12, 16],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: shrugsDB,
      },
      {
        title: 'Military Dumbbell Press',
        sets: [2],
        reps: [12, 16],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: militaryPressDB,
      },
      {
        title: 'Rear Delt Flyes',
        sets: [1],
        reps: [12, 16],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: rearDeltFly,
      },
      {
        title: 'Barbell Curls',
        sets: [2],
        reps: [12, 16],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: curlsBB,
      },
      {
        title: 'Tricep Pressdown',
        sets: [2],
        reps: [12, 16],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: triPressDown,
      },
      {
        title: 'Isometric Planks',
        sets: [2],
        reps: [1],
        weight: 20,
        timed: true,
        timer: 60,
        notes: null,
        metric: true,
        imgUrl: plank,
      },
      {
        title: 'Bodyweight Calf Raises',
        sets: [2],
        reps: [20, 40],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: calfRaisesBW,
      },
    ],
    restBreakSecs: 90,
  },
  //workout 2
  {
    _id: '2',
    imgUrl:
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    mainTitle: 'Phase 1: Workout A',
    discriptionShort: 'To build maximum strength and power',
    discriptionExtra:
      'Rapid and dramatic strength gains. Your muscle will begin to feel hard and dense.',
    weekDuration: [4, 6],
    exercises: [
      {
        title: 'Box Squats',
        sets: [1],
        reps: [10],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
      {
        title: 'Barbell Squats',
        sets: [4, 6],
        reps: [1, 4],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
      {
        title: 'Barbell Bench Press',
        sets: [4, 6],
        reps: [1, 4],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
      {
        title: 'Weighted Pull-Ups',
        sets: [2],
        reps: [1, 6],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
      {
        title: 'Barbell Shrugs',
        sets: [3],
        reps: [3, 6],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
      {
        title: 'Barbell Curls',
        sets: [2],
        reps: [6, 8],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
      {
        title: 'Barbell Skull Crushers',
        sets: [2],
        reps: [6, 8],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
      {
        title: 'Weighted Decline Sit-Ups',
        sets: [5],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
      {
        title: 'Standing Calf Raises',
        sets: [5],
        reps: [8, 20],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
    ],
    restBreakSecs: 180,
  },
  //workout 3
  {
    _id: '3',
    imgUrl:
      'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80',
    mainTitle: 'Phase 1: Workout B',
    discriptionShort: 'To build maximum strength and power',
    discriptionExtra:
      'Rapid and dramatic strength gains. Your muscle will begin to feel hard and dense.',
    weekDuration: [4, 6],
    exercises: [
      {
        uuid: 'aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjgiuw',
        title: 'Good Mornings',
        sets: [1],
        reps: [10],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
      {
        uuid: 'aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjwwwwwwwwwwwwww',
        title: 'Barbell Deadlifts',
        sets: [4, 6],
        reps: [1, 4],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
      {
        uuid: 'aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjgiuwwwwwwkkkkklll',
        title: 'Standing Overhead Barbell Press',
        sets: [4, 6],
        reps: [1, 4],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
      {
        title: 'Rear Delt Flyes',
        sets: [2],
        reps: [6, 8],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
      {
        title: 'Standing Dumbbell Shrugs',
        sets: [2],
        reps: [6, 8],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
      {
        title: 'Dumbbell Hammer Curls',
        sets: [2],
        reps: [6, 8],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
      {
        title: 'Dumbbell Overhead Tricep Extension',
        sets: [2],
        reps: [6, 8],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
      {
        title: 'Hanging Leg Raises',
        sets: [5],
        reps: [8, 20],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
      {
        title: 'Seated Calf Raises',
        sets: [3],
        reps: [8, 20],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
    ],
    restBreakSecs: 180,
  },
  //workout 4
  {
    _id: '4',
    imgUrl: reelTim,
    mainTitle: 'Phase 1: Workout Tim',
    discriptionShort: 'Reel Tim Reel Power',
    discriptionExtra:
      'Be a Sexy man like Tim.',
    weekDuration: [3, 4],
    exercises: [
      {
        uuid: 'aslkhfklahfklaffffffssssaaashfklhasfklhiheiohoihiohoiofjkxvckjgiuw',
        title: 'DÉVELOPPÉ COUCHÉ',
        sets: [4],
        reps: [10],
        weight: 60,
        timed: false,
        timer: null,
        notes: 'À 70%',
        metric: true,
        imgUrl: benchPressBB,
      },
      {
        uuid: 'aslkhfkla123569642dhfklashfklhasfklhiheiohoihiohoiofjkxvckjwwwwwwwwwwwwww',
        title: 'ECARTÉS INCLINÉS HALTÈRES ',
        sets: [4],
        reps: [12],
        weight: 15,
        timed: false,
        timer: null,
        notes: 'À 25% ',
        metric: true,
        imgUrl: ecartes,
      },
      {
        uuid: 'aslkhfklahfk2lashfklhasfklhilsfhfhsnawhopihpsihp7654heiohoihiohoiofjkxvckjgiuwwwwwwkkkkklll',
        title: 'PULL OVER',
        sets: [4],
        reps: [10],
        weight: 22.5,
        timed: false,
        timer: null,
        notes: 'À 25%',
        metric: true,
        imgUrl: pullover,
      },
      {
        title: 'DIPS',
        sets: [4],
        reps: [10],
        weight: 0,
        timed: false,
        timer: null,
        notes: 'Aide 42',
        metric: true,
        imgUrl: dips,
      },
      {
        title: 'DÉVELOPPÉ MILITAIRE DEBOUT',
        sets: [4],
        reps: [10],
        weight: 20,
        timed: false,
        timer: null,
        notes: 'À 70%',
        metric: true,
        imgUrl: militaryPressDB,
      },
      {
        title: 'OISEAU LATÉRAL DEBOUT',
        sets: [4],
        reps: [12],
        weight: 15,
        timed: false,
        timer: null,
        notes: 'À 20% ',
        metric: true,
        imgUrl: reardeltflies,
      },
      {
        title: 'GAINAGE STATIQUE',
        sets: [4],
        reps: [3],
        weight: 20,
        timed: true,
        timer: 45,
        notes: null,
        metric: true,
        imgUrl: plank,
      },
      
    ],
    restBreakSecs: 90,
  },
];
