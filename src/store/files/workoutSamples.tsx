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
import reardeltflies from '../images/reardeltflies.jpg';
import dips from '../images/dips.jpg';
import pullover from '../images/pullover.png';
import ecartes from '../images/ecartes.jpg';

export const workoutSamples: IWorkout[] = [
  // worout 1
  {
    _id: '1',
    mainTitle: 'Anabolic Pre-Phase',
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
    mainTitle: 'Anabolic Phase I: Workout A',
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
    mainTitle: 'Anabolic Phase I: Workout B',
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
 
  //workout 5
  {
    _id: '5',
    imgUrl:
      'https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
    //PHASE II: Weeks 7-9 Muscle Fiber
    mainTitle: 'Anabolic Phase II: Workout A',
    discriptionShort:
      'Focus more on the feel of the muscles being worked. Aim for perfect form and a good pump.',
    discriptionExtra:
      'Aim for perfect form and a good pump. Fuller and rounder muscles.',
    weekDuration: [3],
    exercises: [
      {
        title: 'Barbell Squats',
        sets: [3],
        reps: [8,12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: squatBB,
      },
      {
        title: 'Incline Barbell Chest Press',
        sets: [3],
        reps: [8,12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      },
      {
        title: 'Barbell Rows',
        sets: [3],
        reps: [8,12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: 'https://pixahive.com/wp-content/uploads/2020/08/Barbell-Row-Workout-48757-pixahive.jpg',
      },
      {
        title: 'Standing Dumbbell Shrugs',
        sets: [3],
        reps: [8,12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: shrugsDB,
      },
      {
        title: 'Rear Delt Flyes',
        sets: [2],
        reps: [8,12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: rearDeltFly,
      },
      {
        title: 'Lateral Raise',
        sets: [2],
        reps: [8,12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: 'https://i2.wp.com/pixahive.com/wp-content/uploads/2020/08/Sexy-Girl-doing-Dumbell-Exercise-in-the-Gym-23633-pixahive.jpg?fit=1000%2C666&ssl=1',
      },
      {
        title: 'Dumbbell Supinating Curls',
        sets: [3],
        reps: [8,12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: 'https://images.unsplash.com/photo-1541338784564-51087dabc0de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      },
      {
        title: 'Weighted Dips',
        sets: [3],
        reps: [8,12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: 'https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
      {
        title: 'Seated Calf Raises',
        sets: [3],
        reps: [8,12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Seated-calf-raise-2-2.gif?20101029133355',
      },
      {
        title: 'Hanging Leg Raises',
        sets: [3],
        reps: [8,20],
        weight: 0,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: 'https://images.unsplash.com/photo-1601986313624-28c11ac26334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      },
    ],
    restBreakSecs: 60,
  },
  //workout 6
  {
    _id: '6',
    imgUrl:
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
    mainTitle: 'Anabolic Phase II: Workout B',
    discriptionShort: 'Focus more on the feel of the muscles being worked.',
    discriptionExtra:
      'Aim for perfect form and a good pump. Fuller and rounder muscles.',
    weekDuration: [3],
    exercises: [

      {
        // #1
        uuid: 'aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjgiuw',
        title: 'Barbell Deadlifts',
        sets: [3],
        reps: [4,8],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
      {
        // #2
        uuid: 'aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjgiuw',
        title: 'Lying Leg Curls',
        sets: [1],
        reps: [8,12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
      {
        // #3
        uuid: 'aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjgiuw',
        title: 'Barbell Shrugs',
        sets: [3],
        reps: [8,12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
      {
        // #4
        uuid: 'aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjgiuw',
        title: 'Flat Dumbbell Chest Press',
        sets: [3],
        reps: [8,12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
      {
        // #5
        uuid: 'aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjgiuw',
        title: 'Dumbbell Pullover',
        sets: [1],
        reps: [8,12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
      {
        // #6
        uuid: 'aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjgiuw',
        title: 'Bodyweight Chin-Ups',
        sets: [2],
        reps: [6,12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
      {
        // #7
        uuid: 'aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjgiuw',
        title: 'Dumbbell Shoulder Press',
        sets: [3],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
      {
        // #8
        uuid: 'aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjgiuw',
        title: 'Barbell Curls',
        sets: [3],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
      {
        // #9
        uuid: 'aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjgiuw',
        title: 'Tricep Pressdowns',
        sets: [3],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
      {
        // #10
        uuid: 'aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjgiuw',
        title: 'Standing Calf Raises',
        sets: [3],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
      {
        // #11
        uuid: 'aslkhfklahfklashfklhasfklhiheiohoihiohoiofjkxvckjgiuw',
        title: 'Bodyweight Decline Sit-Ups',
        sets: [3],
        reps: [30,100],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
        imgUrl: '',
      },
    ],
    restBreakSecs: 60,
  },
];
