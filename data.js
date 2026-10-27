/* FORGE — Static Data: Exercise Library & Food Database */

const EXERCISE_LIBRARY = [
  {
    id: 'bench-press',
    video: 'https://www.youtube.com/results?search_query=how+to+barbell+bench+press+form',
    name: 'Bench Press',
    primaryMuscles: ['Chest'],
    secondaryMuscles: ['Triceps', 'Front Delts'],
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    instructions: [
      'Lie on a flat bench with feet planted firmly on the floor.',
      'Grip the bar slightly wider than shoulder-width.',
      'Unrack the bar and hold it above your chest with arms extended.',
      'Lower the bar controlled to mid-chest (eccentric).',
      'Press the bar back up explosively until arms are locked out.',
      'Repeat for the target reps.'
    ],
    commonMistakes: [
      'Bouncing the bar off the chest',
      'Flaring elbows too wide (risk to shoulders)',
      'Lifting hips off the bench',
      'Incomplete range of motion'
    ],
    defaultSets: 4,
    defaultReps: 8,
    defaultRest: 90
  },
  {
    id: 'squat',
    name: 'Squat',
    primaryMuscles: ['Quads', 'Glutes'],
    secondaryMuscles: ['Hamstrings', 'Core'],
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    instructions: [
      'Place the bar on your upper traps (high-bar) or rear delts (low-bar).',
      'Stand with feet shoulder-width, toes slightly out.',
      'Brace your core, keep chest up.',
      'Sit back and down until thighs are at least parallel to the floor.',
      'Drive through mid-foot to stand back up.',
      'Keep knees tracking over toes throughout.'
    ],
    commonMistakes: [
      'Knees caving inward',
      'Rounding the lower back',
      'Heels lifting off the floor',
      'Not reaching depth'
    ],
    defaultSets: 4,
    defaultReps: 6,
    defaultRest: 120
  },
  {
    id: 'deadlift',
    name: 'Deadlift',
    primaryMuscles: ['Hamstrings', 'Glutes', 'Back'],
    secondaryMuscles: ['Traps', 'Core', 'Forearms'],
    equipment: 'Barbell',
    difficulty: 'Advanced',
    instructions: [
      'Stand with feet hip-width, bar over mid-foot.',
      'Hinge at hips, grip the bar just outside knees.',
      'Flatten your back, brace core, pull slack out of the bar.',
      'Drive through the floor, extending hips and knees together.',
      'Stand tall at the top, then lower controlled.',
      'Reset and repeat.'
    ],
    commonMistakes: [
      'Rounding the back',
      'Bar drifting away from the body',
      'Hyperextending at the top',
      'Jerking the bar off the floor'
    ],
    defaultSets: 3,
    defaultReps: 5,
    defaultRest: 150
  },
  {
    id: 'romanian-deadlift',
    name: 'Romanian Deadlift',
    primaryMuscles: ['Hamstrings', 'Glutes'],
    secondaryMuscles: ['Lower Back', 'Core'],
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    instructions: [
      'Hold bar at hip height with shoulder-width grip.',
      'Soft knees, hinge at the hips pushing them back.',
      'Lower the bar along your legs until you feel a strong hamstring stretch.',
      'Keep back flat and bar close to the body.',
      'Drive hips forward to return to standing.'
    ],
    commonMistakes: [
      'Rounding the back',
      'Bending the knees too much (turns into squat)',
      'Bar drifting forward',
      'Not feeling the hamstring stretch'
    ],
    defaultSets: 3,
    defaultReps: 8,
    defaultRest: 90
  },
  {
    id: 'overhead-press',
    video: 'https://www.youtube.com/results?search_query=overhead+press+proper+form',
    name: 'Overhead Press',
    primaryMuscles: ['Shoulders'],
    secondaryMuscles: ['Triceps', 'Upper Chest', 'Core'],
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    instructions: [
      'Stand with bar at upper chest, hands just outside shoulders.',
      'Brace core, glutes tight.',
      'Press the bar straight up overhead until arms lock out.',
      'Lower controlled back to the starting position.',
      'Keep the bar path close to your face.'
    ],
    commonMistakes: [
      'Excessive lower-back arch',
      'Pressing the bar forward instead of up',
      'Not locking out fully',
      'Using leg drive (unless push-press)'
    ],
    defaultSets: 4,
    defaultReps: 6,
    defaultRest: 90
  },
  {
    id: 'incline-bench-press',
    name: 'Incline Bench Press',
    primaryMuscles: ['Upper Chest'],
    secondaryMuscles: ['Front Delts', 'Triceps'],
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    instructions: [
      'Set bench to 30–45 degrees incline.',
      'Grip slightly wider than shoulder-width.',
      'Lower bar to upper chest with control.',
      'Press up until arms are extended.',
      'Keep shoulder blades retracted.'
    ],
    commonMistakes: [
      'Setting the incline too high (becomes shoulder press)',
      'Flaring elbows excessively',
      'Bouncing the bar'
    ],
    defaultSets: 3,
    defaultReps: 8,
    defaultRest: 90
  },
  {
    id: 'dumbbell-bench-press',
    video: 'https://www.youtube.com/results?search_query=dumbbell+bench+press+proper+form',
    name: 'Dumbbell Bench Press',
    primaryMuscles: ['Chest'],
    secondaryMuscles: ['Triceps', 'Front Delts'],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    instructions: [
      'Lie on flat bench holding dumbbells at chest level.',
      'Press dumbbells up until arms are extended.',
      'Lower with control until elbows are about 90 degrees or slightly deeper.',
      'Keep wrists stacked over elbows.'
    ],
    commonMistakes: [
      'Going too deep and stressing shoulders',
      'Uneven press between sides',
      'Arching excessively'
    ],
    defaultSets: 3,
    defaultReps: 10,
    defaultRest: 75
  },
  {
    id: 'push-up',
    video: 'https://www.youtube.com/results?search_query=push+up+proper+form',
    name: 'Push-Up',
    primaryMuscles: ['Chest'],
    secondaryMuscles: ['Triceps', 'Front Delts', 'Core'],
    equipment: 'Bodyweight',
    difficulty: 'Beginner',
    instructions: [
      'Start in high plank, hands slightly wider than shoulders.',
      'Body in a straight line from head to heels.',
      'Lower chest toward the floor by bending elbows.',
      'Push back up to the starting position.',
      'Keep core braced throughout.'
    ],
    commonMistakes: [
      'Hips sagging or piking up',
      'Partial range of motion',
      'Flaring elbows to 90 degrees'
    ],
    defaultSets: 3,
    defaultReps: 12,
    defaultRest: 60
  },
  {
    id: 'pull-up',
    video: 'https://www.youtube.com/results?search_query=pull+up+proper+form',
    name: 'Pull-Up',
    primaryMuscles: ['Lats', 'Upper Back'],
    secondaryMuscles: ['Biceps', 'Rear Delts'],
    equipment: 'Pull-up Bar',
    difficulty: 'Advanced',
    instructions: [
      'Hang from the bar with an overhand grip, hands slightly wider than shoulders.',
      'Pull yourself up until chin clears the bar.',
      'Lower with control to a full hang.',
      'Avoid swinging or kipping.'
    ],
    commonMistakes: [
      'Incomplete range of motion',
      'Using momentum',
      'Shrugging shoulders at the bottom'
    ],
    defaultSets: 3,
    defaultReps: 6,
    defaultRest: 90
  },
  {
    id: 'chin-up',
    name: 'Chin-Up',
    primaryMuscles: ['Lats', 'Biceps'],
    secondaryMuscles: ['Upper Back'],
    equipment: 'Pull-up Bar',
    difficulty: 'Intermediate',
    instructions: [
      'Hang from the bar with an underhand (supinated) grip, hands shoulder-width.',
      'Pull up until chin clears the bar.',
      'Lower controlled to full hang.',
      'Keep core engaged.'
    ],
    commonMistakes: [
      'Incomplete range',
      'Swinging',
      'Not fully extending at the bottom'
    ],
    defaultSets: 3,
    defaultReps: 8,
    defaultRest: 90
  },
  {
    id: 'lat-pulldown',
    name: 'Lat Pulldown',
    primaryMuscles: ['Lats'],
    secondaryMuscles: ['Biceps', 'Rear Delts'],
    equipment: 'Cable',
    difficulty: 'Beginner',
    instructions: [
      'Sit at the lat pulldown machine, adjust thigh pads.',
      'Grip the bar wider than shoulder-width.',
      'Pull the bar down to upper chest while leaning slightly back.',
      'Squeeze shoulder blades together at the bottom.',
      'Return controlled to the start.'
    ],
    commonMistakes: [
      'Pulling behind the neck',
      'Using too much momentum',
      'Not achieving a full stretch at the top'
    ],
    defaultSets: 3,
    defaultReps: 10,
    defaultRest: 75
  },
  {
    id: 'barbell-row',
    name: 'Barbell Row',
    primaryMuscles: ['Upper Back', 'Lats'],
    secondaryMuscles: ['Biceps', 'Rear Delts'],
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    instructions: [
      'Hinge forward at hips, back flat, knees soft.',
      'Grip bar slightly wider than shoulder-width.',
      'Pull the bar to your lower chest / upper abs.',
      'Squeeze shoulder blades at the top.',
      'Lower controlled.'
    ],
    commonMistakes: [
      'Rounding the back',
      'Using too much momentum',
      'Standing too upright'
    ],
    defaultSets: 4,
    defaultReps: 8,
    defaultRest: 90
  },
  {
    id: 'one-arm-dumbbell-row',
    video: 'https://www.youtube.com/results?search_query=one+arm+dumbbell+row+form',
    name: 'One-Arm Dumbbell Row',
    primaryMuscles: ['Lats', 'Upper Back'],
    secondaryMuscles: ['Biceps', 'Rear Delts'],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    instructions: [
      'Place one knee and hand on a bench for support.',
      'Hold dumbbell in the opposite hand, arm hanging straight.',
      'Pull the dumbbell to your hip, keeping elbow close to body.',
      'Squeeze at the top, then lower controlled.',
      'Complete all reps then switch sides.'
    ],
    commonMistakes: [
      'Rotating the torso excessively',
      'Pulling with the arm instead of the back',
      'Shrugging the shoulder'
    ],
    defaultSets: 3,
    defaultReps: 10,
    defaultRest: 60
  },
  {
    id: 'cable-row',
    name: 'Cable Row',
    primaryMuscles: ['Upper Back', 'Lats'],
    secondaryMuscles: ['Biceps', 'Rear Delts'],
    equipment: 'Cable',
    difficulty: 'Beginner',
    instructions: [
      'Sit at the cable row station, feet on platform.',
      'Grip the handle, sit upright with slight knee bend.',
      'Pull the handle to your torso, squeezing shoulder blades.',
      'Return with control, feeling a stretch in the lats.'
    ],
    commonMistakes: [
      'Rounding the back',
      'Using momentum',
      'Shrugging shoulders up'
    ],
    defaultSets: 3,
    defaultReps: 10,
    defaultRest: 75
  },
  {
    id: 'biceps-curl',
    name: 'Biceps Curl',
    primaryMuscles: ['Biceps'],
    secondaryMuscles: ['Forearms'],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    instructions: [
      'Stand holding dumbbells at sides, palms facing forward.',
      'Curl the weights up by flexing the elbows.',
      'Squeeze at the top, then lower controlled.',
      'Keep upper arms stationary.'
    ],
    commonMistakes: [
      'Swinging the weights',
      'Moving the elbows forward',
      'Incomplete range of motion'
    ],
    defaultSets: 3,
    defaultReps: 12,
    defaultRest: 60
  },
  {
    id: 'hammer-curl',
    video: 'https://www.youtube.com/results?search_query=dumbbell+hammer+curl+form',
    name: 'Hammer Curl',
    primaryMuscles: ['Biceps', 'Brachialis'],
    secondaryMuscles: ['Forearms'],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    instructions: [
      'Hold dumbbells at sides with neutral grip (palms facing each other).',
      'Curl the weights up without rotating the wrists.',
      'Squeeze at the top, lower controlled.'
    ],
    commonMistakes: [
      'Using momentum',
      'Letting elbows drift forward'
    ],
    defaultSets: 3,
    defaultReps: 12,
    defaultRest: 60
  },
  {
    id: 'triceps-pushdown',
    name: 'Triceps Pushdown',
    primaryMuscles: ['Triceps'],
    secondaryMuscles: [],
    equipment: 'Cable',
    difficulty: 'Beginner',
    instructions: [
      'Stand at a cable station with a straight or V-bar attachment.',
      'Elbows pinned at sides, push the bar down until arms are fully extended.',
      'Squeeze the triceps at the bottom.',
      'Return controlled to the start.'
    ],
    commonMistakes: [
      'Letting elbows flare out',
      'Leaning forward excessively',
      'Incomplete lockout'
    ],
    defaultSets: 3,
    defaultReps: 12,
    defaultRest: 60
  },
  {
    id: 'lateral-raise',
    video: 'https://www.youtube.com/results?search_query=dumbbell+lateral+raise+form',
    name: 'Lateral Raise',
    primaryMuscles: ['Side Delts'],
    secondaryMuscles: ['Front Delts'],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    instructions: [
      'Stand holding dumbbells at sides.',
      'Raise arms out to the sides until parallel to the floor (or slightly higher).',
      'Lead with the elbows, slight bend in the arms.',
      'Lower controlled.'
    ],
    commonMistakes: [
      'Using momentum / swinging',
      'Raising arms too high',
      'Shrugging the traps'
    ],
    defaultSets: 3,
    defaultReps: 12,
    defaultRest: 60
  },
  {
    id: 'face-pull',
    name: 'Face Pull',
    primaryMuscles: ['Rear Delts', 'Upper Back'],
    secondaryMuscles: ['Rotator Cuff'],
    equipment: 'Cable',
    difficulty: 'Beginner',
    instructions: [
      'Set cable at upper chest or face height with rope attachment.',
      'Pull the rope toward your face, externally rotating the shoulders.',
      'Squeeze the rear delts and upper back at the end.',
      'Return controlled.'
    ],
    commonMistakes: [
      'Using too much weight',
      'Not externally rotating',
      'Pulling too low (to the chest)'
    ],
    defaultSets: 3,
    defaultReps: 15,
    defaultRest: 60
  },
  {
    id: 'leg-press',
    name: 'Leg Press',
    primaryMuscles: ['Quads', 'Glutes'],
    secondaryMuscles: ['Hamstrings'],
    equipment: 'Machine',
    difficulty: 'Beginner',
    instructions: [
      'Sit in the leg press with feet shoulder-width on the platform.',
      'Lower the platform by bending the knees until about 90 degrees.',
      'Press back up without locking the knees hard.',
      'Keep lower back against the pad.'
    ],
    commonMistakes: [
      'Going too deep and rounding the lower back',
      'Locking out aggressively',
      'Feet placement too high or too low'
    ],
    defaultSets: 3,
    defaultReps: 10,
    defaultRest: 90
  },
  {
    id: 'leg-extension',
    name: 'Leg Extension',
    primaryMuscles: ['Quads'],
    secondaryMuscles: [],
    equipment: 'Machine',
    difficulty: 'Beginner',
    instructions: [
      'Sit in the leg extension machine, adjust the pad to sit on your lower shins.',
      'Extend the knees fully, squeezing the quads at the top.',
      'Lower controlled without letting the weight stack slam.'
    ],
    commonMistakes: [
      'Using momentum',
      'Hyperextending the knees',
      'Lifting the hips off the seat'
    ],
    defaultSets: 3,
    defaultReps: 12,
    defaultRest: 60
  },
  {
    id: 'leg-curl',
    name: 'Leg Curl',
    primaryMuscles: ['Hamstrings'],
    secondaryMuscles: [],
    equipment: 'Machine',
    difficulty: 'Beginner',
    instructions: [
      'Lie face down (or sit) on the leg curl machine.',
      'Curl the pad toward your glutes by flexing the knees.',
      'Squeeze the hamstrings at the top.',
      'Lower controlled.'
    ],
    commonMistakes: [
      'Using momentum',
      'Lifting the hips',
      'Incomplete range'
    ],
    defaultSets: 3,
    defaultReps: 12,
    defaultRest: 60
  },
  {
    id: 'calf-raise',
    video: 'https://www.youtube.com/results?search_query=dumbbell+calf+raise+form',
    name: 'Calf Raise',
    primaryMuscles: ['Calves'],
    secondaryMuscles: [],
    equipment: 'Machine / Bodyweight',
    difficulty: 'Beginner',
    instructions: [
      'Stand on a raised surface or calf raise machine with the balls of your feet.',
      'Lower heels below the platform for a stretch.',
      'Raise up onto your toes as high as possible.',
      'Squeeze at the top, then lower controlled.'
    ],
    commonMistakes: [
      'Bouncing',
      'Incomplete range of motion',
      'Using too much weight and losing control'
    ],
    defaultSets: 4,
    defaultReps: 15,
    defaultRest: 45
  },
  {
    id: 'lunge',
    name: 'Lunge',
    primaryMuscles: ['Quads', 'Glutes'],
    secondaryMuscles: ['Hamstrings', 'Core'],
    equipment: 'Bodyweight / Dumbbells',
    difficulty: 'Beginner',
    instructions: [
      'Stand tall, step one foot forward.',
      'Lower until both knees are about 90 degrees.',
      'Front knee tracks over the mid-foot.',
      'Push through the front foot to return to standing.',
      'Alternate legs or complete all reps on one side.'
    ],
    commonMistakes: [
      'Front knee caving inward',
      'Trailing knee slamming the floor',
      'Torso leaning too far forward'
    ],
    defaultSets: 3,
    defaultReps: 10,
    defaultRest: 60
  },
  {
    id: 'bulgarian-split-squat',
    video: 'https://www.youtube.com/results?search_query=bulgarian+split+squat+form',
    name: 'Bulgarian Split Squat',
    primaryMuscles: ['Quads', 'Glutes'],
    secondaryMuscles: ['Hamstrings', 'Core'],
    equipment: 'Dumbbells / Bodyweight',
    difficulty: 'Intermediate',
    instructions: [
      'Place rear foot on a bench or elevated surface.',
      'Front foot far enough forward so the knee stays over the mid-foot.',
      'Lower until the front thigh is parallel to the floor.',
      'Drive through the front foot to stand.',
      'Complete all reps then switch legs.'
    ],
    commonMistakes: [
      'Front foot too close (knee travels past toes excessively)',
      'Leaning too far forward',
      'Not going deep enough'
    ],
    defaultSets: 3,
    defaultReps: 8,
    defaultRest: 75
  },
  {
    id: 'hip-thrust',
    name: 'Hip Thrust',
    primaryMuscles: ['Glutes'],
    secondaryMuscles: ['Hamstrings', 'Core'],
    equipment: 'Barbell / Bodyweight',
    difficulty: 'Beginner',
    instructions: [
      'Sit on the floor with upper back against a bench.',
      'Roll a barbell over your hips (use a pad).',
      'Drive through the heels, thrusting hips up until fully extended.',
      'Squeeze glutes hard at the top.',
      'Lower controlled.'
    ],
    commonMistakes: [
      'Hyperextending the lower back at the top',
      'Not achieving full hip extension',
      'Pushing through the toes instead of heels'
    ],
    defaultSets: 3,
    defaultReps: 10,
    defaultRest: 75
  },
  {
    id: 'plank',
    video: 'https://www.youtube.com/results?search_query=plank+exercise+proper+form',
    name: 'Plank',
    primaryMuscles: ['Core'],
    secondaryMuscles: ['Shoulders', 'Glutes'],
    equipment: 'Bodyweight',
    difficulty: 'Beginner',
    instructions: [
      'Start in a forearm plank position.',
      'Body in a straight line from head to heels.',
      'Brace the core, squeeze glutes.',
      'Hold for the prescribed time without sagging or piking.'
    ],
    commonMistakes: [
      'Hips sagging',
      'Hips too high',
      'Holding breath'
    ],
    defaultSets: 3,
    defaultReps: 30,
    defaultRest: 45
  },
  {
    id: 'hanging-knee-raise',
    name: 'Hanging Knee Raise',
    primaryMuscles: ['Abs'],
    secondaryMuscles: ['Hip Flexors'],
    equipment: 'Pull-up Bar',
    difficulty: 'Intermediate',
    instructions: [
      'Hang from a pull-up bar with an overhand grip.',
      'Raise your knees toward your chest by flexing the hips and abs.',
      'Lower controlled without swinging.',
      'Avoid using momentum.'
    ],
    commonMistakes: [
      'Swinging / kipping',
      'Not controlling the descent',
      'Only using hip flexors'
    ],
    defaultSets: 3,
    defaultReps: 10,
    defaultRest: 60
  },
  {
    id: 'crunch',
    name: 'Crunch',
    primaryMuscles: ['Abs'],
    secondaryMuscles: [],
    equipment: 'Bodyweight',
    difficulty: 'Beginner',
    instructions: [
      'Lie on your back, knees bent, feet flat.',
      'Hands lightly behind the head or across the chest.',
      'Curl the upper back off the floor by contracting the abs.',
      'Lower controlled. Do not pull on the neck.'
    ],
    commonMistakes: [
      'Pulling on the neck',
      'Using momentum',
      'Coming up too high (becomes a sit-up)'
    ],
    defaultSets: 3,
    defaultReps: 15,
    defaultRest: 45
  }
,

  {
    id: 'goblet-squat',
    video: 'https://www.youtube.com/results?search_query=goblet+squat+proper+form',
    name: 'Goblet Squat',
    primaryMuscles: ['Quads', 'Glutes'],
    secondaryMuscles: ['Core'],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    instructions: [
      'Hold one dumbbell vertically at chest height (goblet position).',
      'Stand with feet about shoulder-width, toes slightly out.',
      'Brace your core and sit down between your hips.',
      'Descend until thighs are at least parallel to the floor.',
      'Drive through mid-foot to stand tall without leaning forward.'
    ],
    commonMistakes: [
      'Letting the elbows flare and the weight drift forward',
      'Heels lifting off the floor',
      'Rounding the upper back'
    ],
    defaultSets: 3,
    defaultReps: 10,
    defaultRest: 90
  },
  {
    id: 'dumbbell-rdl',
    video: 'https://www.youtube.com/results?search_query=dumbbell+romanian+deadlift+form',
    name: 'Dumbbell Romanian Deadlift',
    primaryMuscles: ['Hamstrings', 'Glutes'],
    secondaryMuscles: ['Lower Back', 'Core'],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    instructions: [
      'Hold dumbbells at your sides with a neutral grip.',
      'Soft knees, hinge at the hips pushing them back.',
      'Lower the weights along your legs until you feel a hamstring stretch.',
      'Keep the back flat and dumbbells close to the body.',
      'Drive the hips forward to return to standing.'
    ],
    commonMistakes: [
      'Rounding the lower back',
      'Turning it into a squat by bending the knees too much',
      'Letting the weights drift away from the legs'
    ],
    defaultSets: 3,
    defaultReps: 10,
    defaultRest: 90
  },
  {
    id: 'dumbbell-overhead-press',
    name: 'Dumbbell Overhead Press',
    primaryMuscles: ['Shoulders'],
    secondaryMuscles: ['Triceps', 'Upper Chest', 'Core'],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    instructions: [
      'Stand or sit holding dumbbells at shoulder height, palms forward or neutral.',
      'Brace your core and glutes.',
      'Press the dumbbells overhead until arms are locked out.',
      'Lower with control back to the shoulders.',
      'Avoid excessive lower-back arch.'
    ],
    commonMistakes: [
      'Pressing the weights forward instead of up',
      'Flaring the ribs and overarching the low back',
      'Incomplete lockout'
    ],
    defaultSets: 3,
    defaultReps: 8,
    defaultRest: 90
  },
  {
    id: 'incline-dumbbell-press',
    video: 'https://www.youtube.com/results?search_query=incline+dumbbell+press+form',
    name: 'Incline Dumbbell Press',
    primaryMuscles: ['Upper Chest'],
    secondaryMuscles: ['Front Delts', 'Triceps'],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    instructions: [
      'Set a bench to about 30–45 degrees.',
      'Hold dumbbells at chest level with palms facing forward.',
      'Press up until arms are extended without locking aggressively.',
      'Lower with control until elbows are about 90 degrees or slightly deeper.',
      'Keep shoulder blades lightly retracted against the bench.'
    ],
    commonMistakes: [
      'Setting the incline too steep (becomes a shoulder press)',
      'Bouncing at the bottom',
      'Flaring elbows excessively'
    ],
    defaultSets: 3,
    defaultReps: 10,
    defaultRest: 75
  },
  {
    id: 'dumbbell-lunges',
    name: 'Dumbbell Lunge',
    primaryMuscles: ['Quads', 'Glutes'],
    secondaryMuscles: ['Hamstrings', 'Core'],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    instructions: [
      'Hold dumbbells at your sides.',
      'Step one foot forward and lower until both knees are about 90 degrees.',
      'Front knee tracks over the mid-foot.',
      'Push through the front foot to return to standing.',
      'Alternate legs or finish all reps on one side first.'
    ],
    commonMistakes: [
      'Front knee caving inward',
      'Short stepping so the knee shoots past the toes excessively',
      'Torso collapsing forward'
    ],
    defaultSets: 3,
    defaultReps: 10,
    defaultRest: 60
  },
  {
    id: 'chest-supported-db-row',
    video: 'https://www.youtube.com/results?search_query=chest+supported+dumbbell+row+form',
    name: 'Chest-Supported Dumbbell Row',
    primaryMuscles: ['Lats', 'Upper Back'],
    secondaryMuscles: ['Biceps', 'Rear Delts'],
    equipment: 'Dumbbells',
    difficulty: 'Intermediate',
    instructions: [
      'Lie chest-down on an incline bench set around 30–45 degrees.',
      'Hold dumbbells with arms hanging straight down.',
      'Row the weights toward your hips, squeezing your shoulder blades.',
      'Lower under control without bouncing.',
      'Keep your chest glued to the pad.'
    ],
    commonMistakes: ['Using momentum', 'Shrugging the traps heavily', 'Short range of motion'],
    defaultSets: 3, defaultReps: 10, defaultRest: 90
  },
  {
    id: 'seated-db-shoulder-press',
    video: 'https://www.youtube.com/results?search_query=seated+dumbbell+shoulder+press+form',
    name: 'Seated Dumbbell Shoulder Press',
    primaryMuscles: ['Shoulders'],
    secondaryMuscles: ['Triceps', 'Upper Chest'],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    instructions: [
      'Sit on a bench with back support holding dumbbells at shoulder height.',
      'Press overhead until arms are nearly locked out.',
      'Lower with control to the shoulders.',
      'Keep ribs down and avoid excessive arching.'
    ],
    commonMistakes: ['Overarching the lower back', 'Pressing forward instead of up'],
    defaultSets: 3, defaultReps: 8, defaultRest: 120
  },
  {
    id: 'alternating-db-curl',
    video: 'https://www.youtube.com/results?search_query=alternating+dumbbell+curl+form',
    name: 'Alternating Dumbbell Curl',
    primaryMuscles: ['Biceps'],
    secondaryMuscles: ['Forearms'],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    instructions: [
      'Stand holding dumbbells at your sides, palms forward or neutral.',
      'Curl one arm up while keeping the elbow close to your torso.',
      'Lower under control and switch arms.',
      'Avoid swinging the torso.'
    ],
    commonMistakes: ['Using momentum', 'Elbows drifting forward'],
    defaultSets: 2, defaultReps: 12, defaultRest: 60
  },
  {
    id: 'lying-db-tricep-extension',
    video: 'https://www.youtube.com/results?search_query=lying+dumbbell+triceps+extension+form',
    name: 'Lying Dumbbell Triceps Extension',
    primaryMuscles: ['Triceps'],
    secondaryMuscles: [],
    equipment: 'Dumbbells',
    difficulty: 'Intermediate',
    instructions: [
      'Lie on a flat bench holding dumbbells above your chest, arms extended.',
      'Bend only at the elbows to lower the weights toward your forehead or beside your head.',
      'Extend the elbows to return to the start.',
      'Keep upper arms relatively fixed.'
    ],
    commonMistakes: ['Flaring elbows excessively', 'Moving the shoulders instead of the elbows'],
    defaultSets: 2, defaultReps: 12, defaultRest: 60
  },
  {
    id: 'db-glute-bridge',
    video: 'https://www.youtube.com/results?search_query=dumbbell+glute+bridge+form',
    name: 'Dumbbell Glute Bridge',
    primaryMuscles: ['Glutes'],
    secondaryMuscles: ['Hamstrings', 'Core'],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    instructions: [
      'Lie on your back, knees bent, feet flat, dumbbell resting on hips.',
      'Drive through the heels to raise hips until torso and thighs align.',
      'Squeeze glutes at the top, then lower with control.',
      'Do not hyperextend the lower back.'
    ],
    commonMistakes: ['Pushing through the toes', 'Overarching the low back'],
    defaultSets: 3, defaultReps: 10, defaultRest: 90
  },
  {
    id: 'weighted-crunch',
    video: 'https://www.youtube.com/results?search_query=weighted+crunch+form',
    name: 'Weighted Crunch',
    primaryMuscles: ['Abs'],
    secondaryMuscles: ['Core'],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    instructions: [
      'Lie on your back holding a light dumbbell on your chest or behind your head.',
      'Curl the ribcage toward the pelvis, lifting shoulders slightly off the floor.',
      'Lower under control without yanking the neck.'
    ],
    commonMistakes: ['Pulling on the neck', 'Using only hip flexors'],
    defaultSets: 3, defaultReps: 12, defaultRest: 60
  },
  {
    id: 'rear-delt-fly',
    video: 'https://www.youtube.com/results?search_query=dumbbell+rear+delt+fly+form',
    name: 'Rear-Delt Fly',
    primaryMuscles: ['Rear Delts'],
    secondaryMuscles: ['Upper Back'],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    instructions: [
      'Hinge at the hips with a slight knee bend, dumbbells hanging below.',
      'Raise arms out to the sides with a soft elbow bend, squeezing rear delts.',
      'Lower under control.',
      'Avoid swinging or using the lower back.'
    ],
    commonMistakes: ['Using too much weight', 'Shrugging traps'],
    defaultSets: 3, defaultReps: 15, defaultRest: 60
  },
  {
    id: 'seated-db-tricep-extension',
    video: 'https://www.youtube.com/results?search_query=overhead+dumbbell+triceps+extension+form',
    name: 'Seated Dumbbell Triceps Extension',
    primaryMuscles: ['Triceps'],
    secondaryMuscles: [],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    instructions: [
      'Sit holding one or two dumbbells overhead with arms extended.',
      'Bend the elbows to lower the weight behind the head.',
      'Extend the elbows to lock out without flaring excessively.'
    ],
    commonMistakes: ['Elbows flaring wide', 'Incomplete range of motion'],
    defaultSets: 3, defaultReps: 12, defaultRest: 60
  },
  {
    id: 'db-wrist-curl',
    video: 'https://www.youtube.com/results?search_query=dumbbell+wrist+curl+form',
    name: 'Dumbbell Wrist Curl',
    primaryMuscles: ['Forearms'],
    secondaryMuscles: [],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    instructions: [
      'Sit with forearms on thighs, wrists hanging past the knees, palms up.',
      'Curl the weights up by flexing the wrists, then lower slowly.'
    ],
    commonMistakes: ['Using the arms instead of the wrists', 'Rushing the eccentric'],
    defaultSets: 2, defaultReps: 15, defaultRest: 45
  },
  {
    id: 'db-reverse-wrist-curl',
    name: 'Reverse Wrist Curl',
    primaryMuscles: ['Forearms'],
    secondaryMuscles: [],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    instructions: [
      'Same setup as wrist curls but palms face down.',
      'Extend the wrists to lift the weights, then lower under control.'
    ],
    commonMistakes: ['Too much weight', 'Elbow movement'],
    defaultSets: 2, defaultReps: 15, defaultRest: 45
  },
  {
    id: 'dead-bug',
    video: 'https://www.youtube.com/results?search_query=dead+bug+exercise+form',
    name: 'Dead Bug',
    primaryMuscles: ['Core'],
    secondaryMuscles: ['Abs'],
    equipment: 'Bodyweight',
    difficulty: 'Beginner',
    instructions: [
      'Lie on your back, arms up, knees bent 90 degrees.',
      'Press low back into the floor.',
      'Extend opposite arm and leg slowly, then return and switch sides.',
      'Keep the core braced the entire time.'
    ],
    commonMistakes: ['Arching the low back', 'Moving too fast'],
    defaultSets: 3, defaultReps: 10, defaultRest: 45
  },
  {
    id: 'front-loaded-db-squat',
    video: 'https://www.youtube.com/results?search_query=front+rack+dumbbell+squat+form',
    name: 'Front-Loaded Dumbbell Squat',
    primaryMuscles: ['Quads', 'Glutes'],
    secondaryMuscles: ['Core'],
    equipment: 'Dumbbells',
    difficulty: 'Intermediate',
    instructions: [
      'Hold dumbbells at shoulder height (front rack) or in a goblet position.',
      'Squat down with upright torso until thighs are at least parallel.',
      'Drive up through mid-foot to stand.',
      'Keep elbows high if using a front rack.'
    ],
    commonMistakes: ['Torso collapsing forward', 'Heels rising'],
    defaultSets: 4, defaultReps: 8, defaultRest: 120
  },
  {
    id: 'db-reverse-lunge',
    video: 'https://www.youtube.com/results?search_query=dumbbell+reverse+lunge+form',
    name: 'Dumbbell Reverse Lunge',
    primaryMuscles: ['Quads', 'Glutes'],
    secondaryMuscles: ['Hamstrings', 'Core'],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    instructions: [
      'Hold dumbbells at your sides.',
      'Step one foot back and lower until both knees are about 90 degrees.',
      'Drive through the front foot to stand.',
      'Alternate legs or complete one side at a time.'
    ],
    commonMistakes: ['Front knee caving in', 'Short stepping'],
    defaultSets: 3, defaultReps: 8, defaultRest: 90
  },
  {
    id: 'single-leg-glute-bridge',
    video: 'https://www.youtube.com/results?search_query=single+leg+glute+bridge+form',
    name: 'Single-Leg Glute Bridge',
    primaryMuscles: ['Glutes'],
    secondaryMuscles: ['Hamstrings', 'Core'],
    equipment: 'Bodyweight',
    difficulty: 'Intermediate',
    instructions: [
      'Lie on your back, one knee bent, other leg extended or bent in the air.',
      'Drive through the planted heel to lift the hips.',
      'Squeeze the glute at the top, lower with control.',
      'Complete all reps on one side, then switch.'
    ],
    commonMistakes: ['Hips rotating', 'Pushing through the toes'],
    defaultSets: 3, defaultReps: 10, defaultRest: 60
  },
  {
    id: 'side-plank',
    video: 'https://www.youtube.com/results?search_query=side+plank+exercise+form',
    name: 'Side Plank',
    primaryMuscles: ['Core', 'Obliques'],
    secondaryMuscles: ['Shoulders'],
    equipment: 'Bodyweight',
    difficulty: 'Beginner',
    instructions: [
      'Lie on one side, elbow under shoulder, legs stacked.',
      'Lift hips so body forms a straight line.',
      'Hold for the prescribed time, then switch sides.',
      'Do not let the hips sag.'
    ],
    commonMistakes: ['Hips dropping', 'Rolling forward or back'],
    defaultSets: 3, defaultReps: 30, defaultRest: 45
  },
  {
    id: 'db-pullover',
    video: 'https://www.youtube.com/results?search_query=dumbbell+pullover+form',
    name: 'Dumbbell Pullover',
    primaryMuscles: ['Lats', 'Chest'],
    secondaryMuscles: ['Triceps', 'Serratus'],
    equipment: 'Dumbbells',
    difficulty: 'Intermediate',
    instructions: [
      'Lie on a bench holding one dumbbell over your chest with both hands.',
      'With a slight elbow bend, lower the weight behind your head in an arc.',
      'Pull the weight back over the chest by engaging the lats.',
      'Keep ribs down and avoid excessive lower-back arch.'
    ],
    commonMistakes: ['Going too deep with a weak shoulder position', 'Using only the arms'],
    defaultSets: 3, defaultReps: 10, defaultRest: 90
  },
  {
    id: 'cross-body-hammer-curl',
    video: 'https://www.youtube.com/results?search_query=cross+body+hammer+curl+form',
    name: 'Cross-Body Hammer Curl',
    primaryMuscles: ['Biceps', 'Brachialis'],
    secondaryMuscles: ['Forearms'],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    instructions: [
      'Stand with dumbbells at your sides, neutral grip.',
      'Curl one weight across the body toward the opposite shoulder.',
      'Lower under control and alternate sides.'
    ],
    commonMistakes: ['Swinging the torso', 'Shrugging the shoulder'],
    defaultSets: 2, defaultReps: 12, defaultRest: 60
  },
  {
    id: 'db-tricep-extension',
    name: 'Dumbbell Triceps Extension',
    primaryMuscles: ['Triceps'],
    secondaryMuscles: [],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    instructions: [
      'Hold a dumbbell overhead with both hands or one in each hand.',
      'Bend the elbows to lower behind the head.',
      'Extend fully without locking out aggressively.'
    ],
    commonMistakes: ['Elbows flaring', 'Incomplete range'],
    defaultSets: 2, defaultReps: 12, defaultRest: 60
  },
  {
    id: 'brisk-walk',
    video: 'https://www.youtube.com/results?search_query=brisk+walking+form+posture',
    name: 'Brisk Walk',
    primaryMuscles: ['Cardio'],
    secondaryMuscles: ['Legs'],
    equipment: 'Bodyweight',
    difficulty: 'Beginner',
    instructions: [
      'Walk at a pace that raises your heart rate but still allows conversation.',
      'Aim for continuous movement for the prescribed time.',
      'Use comfortable shoes and flat or gently rolling terrain.',
      'This is recovery-oriented — keep effort moderate.'
    ],
    commonMistakes: ['Going too hard (turns into a workout day)', 'Skipping entirely when optional'],
    defaultSets: 1, defaultReps: 30, defaultRest: 0
  },
  {
    id: 'easy-bike',
    name: 'Easy Bike / Cycle',
    primaryMuscles: ['Cardio'],
    secondaryMuscles: ['Legs'],
    equipment: 'Machine',
    difficulty: 'Beginner',
    instructions: [
      'Cycle at an easy, sustainable pace.',
      'Keep resistance light — conversational effort.',
      'Focus on smooth cadence, not max power.',
      'Optional recovery session only.'
    ],
    commonMistakes: ['Hard intervals on a rest day', 'Skipping warm-up if joints feel stiff'],
    defaultSets: 1, defaultReps: 25, defaultRest: 0
  },
  {
    id: 'light-mobility',
    video: 'https://www.youtube.com/results?search_query=beginner+mobility+routine',
    name: 'Gentle Mobility Flow',
    primaryMuscles: ['Full Body'],
    secondaryMuscles: [],
    equipment: 'Bodyweight',
    difficulty: 'Beginner',
    instructions: [
      'Move through light hip, shoulder, and spine mobility for the prescribed time.',
      'Examples: cat-cow, hip circles, shoulder openers, easy bodyweight squats.',
      'Stay pain-free and relaxed — no max stretches.',
      'Breathe steadily throughout.'
    ],
    commonMistakes: ['Forcing deep stretches when sore', 'Turning mobility into a hard workout'],
    defaultSets: 1, defaultReps: 15, defaultRest: 0
  },
  {
    id: 'db-thruster',
    video: 'https://www.youtube.com/results?search_query=dumbbell+thruster+form',
    name: 'Dumbbell Thruster',
    primaryMuscles: ['Quads', 'Shoulders'],
    secondaryMuscles: ['Glutes', 'Core', 'Triceps'],
    equipment: 'Dumbbells',
    difficulty: 'Intermediate',
    instructions: [
      'Hold dumbbells at the shoulders in a front-rack position.',
      'Squat down until thighs are about parallel.',
      'Drive up explosively and press the dumbbells overhead in one motion.',
      'Lower the weights back to the shoulders and repeat.',
      'Keep the core braced; do not over-arch the lower back.'
    ],
    commonMistakes: ['Pressing before standing tall', 'Heels lifting in the squat'],
    defaultSets: 3, defaultReps: 12, defaultRest: 60
  },
  {
    id: 'renegade-row',
    video: 'https://www.youtube.com/results?search_query=renegade+row+form',
    name: 'Renegade Row',
    primaryMuscles: ['Back', 'Core'],
    secondaryMuscles: ['Shoulders', 'Arms'],
    equipment: 'Dumbbells',
    difficulty: 'Intermediate',
    instructions: [
      'Start in a plank with hands on dumbbells, feet wide for stability.',
      'Row one dumbbell to the hip while keeping hips square to the floor.',
      'Lower and alternate sides.',
      'Minimize hip rotation.'
    ],
    commonMistakes: ['Hips rocking side to side', 'Sagging lower back'],
    defaultSets: 3, defaultReps: 10, defaultRest: 60
  },
  {
    id: 'db-squat-press',
    video: 'https://www.youtube.com/results?search_query=dumbbell+squat+to+press+form',
    name: 'Dumbbell Squat to Press',
    primaryMuscles: ['Quads', 'Shoulders'],
    secondaryMuscles: ['Glutes', 'Core'],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    instructions: [
      'Hold dumbbells at the shoulders.',
      'Squat down under control, then stand and press overhead.',
      'Can be done as two distinct movements if needed.',
      'Breathe out on the press.'
    ],
    commonMistakes: ['Rushing the squat', 'Overarching on the press'],
    defaultSets: 3, defaultReps: 12, defaultRest: 60
  },
  {
    id: 'mountain-climbers',
    video: 'https://www.youtube.com/results?search_query=mountain+climbers+exercise+form',
    name: 'Mountain Climbers',
    primaryMuscles: ['Core', 'Cardio'],
    secondaryMuscles: ['Shoulders', 'Hip Flexors'],
    equipment: 'Bodyweight',
    difficulty: 'Beginner',
    instructions: [
      'Start in a high plank.',
      'Drive one knee toward the chest, then quickly switch legs.',
      'Keep hips level and shoulders over the wrists.',
      'Timed intervals — work at a steady, sustainable pace.'
    ],
    commonMistakes: ['Hips piking up', 'Bouncing the feet'],
    defaultSets: 3, defaultReps: 30, defaultRest: 30
  },
  {
    id: 'burpees',
    video: 'https://www.youtube.com/results?search_query=burpee+exercise+proper+form',
    name: 'Burpees',
    primaryMuscles: ['Full Body', 'Cardio'],
    secondaryMuscles: ['Chest', 'Legs'],
    equipment: 'Bodyweight',
    difficulty: 'Intermediate',
    instructions: [
      'Squat down, place hands on the floor, jump feet back to a plank.',
      'Optional push-up, then jump feet forward and jump up.',
      'Land soft and repeat.',
      'Scale by stepping back instead of jumping.'
    ],
    commonMistakes: ['Collapsing the lower back in the plank', 'Hard landings'],
    defaultSets: 3, defaultReps: 10, defaultRest: 45
  },
  {
    id: 'jump-rope',
    video: 'https://www.youtube.com/results?search_query=jump+rope+technique+beginners',
    name: 'Jump Rope',
    primaryMuscles: ['Cardio'],
    secondaryMuscles: ['Calves'],
    equipment: 'Bodyweight',
    difficulty: 'Beginner',
    instructions: [
      'Jump rope at an easy to moderate pace for the timed interval.',
      'Stay light on the feet; small jumps.',
      'If no rope, mimic the motion or do low-impact march in place.'
    ],
    commonMistakes: ['Jumping too high', 'Holding breath'],
    defaultSets: 3, defaultReps: 60, defaultRest: 30
  },
  {
    id: 'db-swing',
    video: 'https://www.youtube.com/results?search_query=dumbbell+swing+form',
    name: 'Dumbbell Swing',
    primaryMuscles: ['Glutes', 'Hamstrings'],
    secondaryMuscles: ['Core', 'Cardio'],
    equipment: 'Dumbbells',
    difficulty: 'Intermediate',
    instructions: [
      'Hold one dumbbell with both hands, hinge at the hips.',
      'Swing the weight to about chest height using the hips, not the arms.',
      'Let it swing back between the legs and repeat.',
      'Snap the glutes at the top; do not hyperextend the back.'
    ],
    commonMistakes: ['Squatting instead of hinging', 'Lifting with the arms'],
    defaultSets: 3, defaultReps: 15, defaultRest: 45
  },
  {
    id: 'high-knees',
    video: 'https://www.youtube.com/results?search_query=high+knees+exercise+form',
    name: 'High Knees',
    primaryMuscles: ['Cardio'],
    secondaryMuscles: ['Hip Flexors', 'Core'],
    equipment: 'Bodyweight',
    difficulty: 'Beginner',
    instructions: [
      'Run in place driving knees up toward hip height.',
      'Pump the arms; land softly.',
      'Low-impact option: march with high knees.'
    ],
    commonMistakes: ['Leaning back', 'Holding breath'],
    defaultSets: 3, defaultReps: 30, defaultRest: 30
  },
  {
    id: 'timed-cardio',
    video: 'https://www.youtube.com/results?search_query=brisk+walking+for+fat+loss',
    name: 'Timed Cardio (Walk / Bike / Row)',
    primaryMuscles: ['Cardio'],
    secondaryMuscles: ['Legs'],
    equipment: 'Bodyweight',
    difficulty: 'Beginner',
    instructions: [
      'Choose brisk walk, easy bike, or similar steady cardio.',
      'Work for the full prescribed time at a pace where you can still talk.',
      'This is fat-loss / conditioning support — not an all-out sprint.',
      'Log the session when the timer completes.'
    ],
    commonMistakes: ['Going too hard and compromising recovery', 'Skipping on training days'],
    defaultSets: 1, defaultReps: 600, defaultRest: 0
  },
];

const FOOD_DATABASE = [
  { id: 'chicken-breast', name: 'Chicken Breast', serving: '4 oz', servingGrams: 113, calories: 187, protein: 35, carbs: 0, fat: 4 },
  { id: 'chicken-thighs', name: 'Chicken Thighs', serving: '4 oz', servingGrams: 113, calories: 229, protein: 24, carbs: 0, fat: 14 },
  { id: 'ground-beef', name: 'Ground Beef (90% lean)', serving: '4 oz', servingGrams: 113, calories: 240, protein: 28, carbs: 0, fat: 14 },
  { id: 'turkey', name: 'Turkey Breast', serving: '4 oz', servingGrams: 113, calories: 170, protein: 34, carbs: 0, fat: 2 },
  { id: 'salmon', name: 'Salmon', serving: '4 oz', servingGrams: 113, calories: 230, protein: 25, carbs: 0, fat: 14 },
  { id: 'eggs', name: 'Eggs (large)', serving: '1 egg', servingGrams: 50, calories: 72, protein: 6, carbs: 0, fat: 5 },
  { id: 'greek-yogurt', name: 'Greek Yogurt (plain, nonfat)', serving: '1 cup', servingGrams: 245, calories: 130, protein: 23, carbs: 9, fat: 0 },
  { id: 'milk', name: 'Milk (2%)', serving: '1 cup', servingGrams: 244, calories: 122, protein: 8, carbs: 12, fat: 5 },
  { id: 'cheese', name: 'Cheddar Cheese', serving: '1 oz', servingGrams: 28, calories: 113, protein: 7, carbs: 0, fat: 9 },
  { id: 'rice', name: 'White Rice (cooked)', serving: '1 cup', servingGrams: 158, calories: 205, protein: 4, carbs: 45, fat: 0 },
  { id: 'oatmeal', name: 'Oatmeal (dry)', serving: '1/2 cup', servingGrams: 40, calories: 150, protein: 5, carbs: 27, fat: 3 },
  { id: 'bread', name: 'Whole Wheat Bread', serving: '1 slice', servingGrams: 28, calories: 80, protein: 4, carbs: 14, fat: 1 },
  { id: 'pasta', name: 'Pasta (cooked)', serving: '1 cup', servingGrams: 140, calories: 220, protein: 8, carbs: 43, fat: 1 },
  { id: 'potatoes', name: 'Potato (baked)', serving: '1 medium', servingGrams: 173, calories: 161, protein: 4, carbs: 37, fat: 0 },
  { id: 'banana', name: 'Banana', serving: '1 medium', servingGrams: 118, calories: 105, protein: 1, carbs: 27, fat: 0 },
  { id: 'apple', name: 'Apple', serving: '1 medium', servingGrams: 182, calories: 95, protein: 0, carbs: 25, fat: 0 },
  { id: 'peanut-butter', name: 'Peanut Butter', serving: '2 tbsp', servingGrams: 32, calories: 188, protein: 8, carbs: 6, fat: 16 },
  { id: 'olive-oil', name: 'Olive Oil', serving: '1 tbsp', servingGrams: 14, calories: 119, protein: 0, carbs: 0, fat: 14 },
  { id: 'avocado', name: 'Avocado', serving: '1/2 medium', servingGrams: 68, calories: 114, protein: 1, carbs: 6, fat: 10 },
  { id: 'broccoli', name: 'Broccoli (cooked)', serving: '1 cup', servingGrams: 156, calories: 55, protein: 4, carbs: 11, fat: 0 },
  { id: 'spinach', name: 'Spinach (raw)', serving: '2 cups', servingGrams: 60, calories: 14, protein: 2, carbs: 2, fat: 0 },
  { id: 'sweet-potato', name: 'Sweet Potato (baked)', serving: '1 medium', servingGrams: 114, calories: 103, protein: 2, carbs: 24, fat: 0 },
  { id: 'whey-protein', name: 'Whey Protein Powder', serving: '1 scoop', servingGrams: 30, calories: 120, protein: 24, carbs: 3, fat: 1 },
  { id: 'almonds', name: 'Almonds', serving: '1 oz (23 nuts)', servingGrams: 28, calories: 160, protein: 6, carbs: 6, fat: 14 },
  { id: 'tuna', name: 'Canned Tuna (in water)', serving: '1 can (3 oz)', servingGrams: 85, calories: 73, protein: 16, carbs: 0, fat: 1 },
  { id: 'cottage-cheese', name: 'Cottage Cheese (low-fat)', serving: '1/2 cup', servingGrams: 113, calories: 90, protein: 14, carbs: 4, fat: 2 },
  { id: 'protein-bar', name: 'Protein Bar (generic)', serving: '1 bar', servingGrams: 60, calories: 200, protein: 20, carbs: 22, fat: 6 },
  { id: 'brown-rice', name: 'Brown Rice (cooked)', serving: '1 cup', servingGrams: 195, calories: 215, protein: 5, carbs: 45, fat: 2 }
];

// Starter "My Workouts" when user has none
const DEFAULT_WORKOUTS = [
  {
    id: 'default-upper',
    name: 'Upper Strength',
    exercises: [
      { exerciseId: 'bench-press', sets: 4, reps: 8, weight: 0, rest: 90 },
      { exerciseId: 'overhead-press', sets: 3, reps: 8, weight: 0, rest: 90 },
      { exerciseId: 'barbell-row', sets: 4, reps: 8, weight: 0, rest: 90 },
      { exerciseId: 'lat-pulldown', sets: 3, reps: 10, weight: 0, rest: 75 },
      { exerciseId: 'biceps-curl', sets: 3, reps: 12, weight: 0, rest: 60 }
    ]
  },
  {
    id: 'default-lower',
    name: 'Lower Strength',
    exercises: [
      { exerciseId: 'squat', sets: 4, reps: 6, weight: 0, rest: 120 },
      { exerciseId: 'romanian-deadlift', sets: 3, reps: 8, weight: 0, rest: 90 },
      { exerciseId: 'leg-press', sets: 3, reps: 10, weight: 0, rest: 90 },
      { exerciseId: 'leg-curl', sets: 3, reps: 12, weight: 0, rest: 60 },
      { exerciseId: 'calf-raise', sets: 4, reps: 15, weight: 0, rest: 45 }
    ]
  }
];

/* ============================================================
   WORKOUT LIBRARY — browseable templates (not user data)
   ============================================================ */
const WORKOUT_LIBRARY = [
  // —— STRENGTH ——
  {
    id: 'lib-upper-strength',
    name: 'Upper Strength',
    category: 'Strength',
    dumbbellVariantId: 'lib-upper-strength-db',
    goal: 'Strength',
    difficulty: 'Intermediate',
    duration: 55,
    equipment: ['Barbell', 'Cable', 'Bench'],
    description: 'Heavy compound focus for upper-body strength. Prioritize progressive overload on the main lifts.',
    muscles: ['Chest', 'Back', 'Shoulders', 'Arms'],
    exercises: [
      { exerciseId: 'bench-press', sets: 4, reps: 6, repsMax: 8, rest: 120 },
      { exerciseId: 'barbell-row', sets: 4, reps: 6, repsMax: 8, rest: 120 },
      { exerciseId: 'overhead-press', sets: 3, reps: 6, repsMax: 8, rest: 90 },
      { exerciseId: 'lat-pulldown', sets: 3, reps: 8, repsMax: 10, rest: 90 },
      { exerciseId: 'biceps-curl', sets: 3, reps: 8, repsMax: 12, rest: 60 },
      { exerciseId: 'triceps-pushdown', sets: 3, reps: 8, repsMax: 12, rest: 60 }
    ]
  },
  {
    id: 'lib-lower-strength',
    name: 'Lower Strength',
    category: 'Strength',
    dumbbellVariantId: 'lib-lower-strength-db',
    goal: 'Strength',
    difficulty: 'Intermediate',
    duration: 60,
    equipment: ['Barbell', 'Machine'],
    description: 'Squat and hinge focused lower-body strength session with accessory work.',
    muscles: ['Quads', 'Glutes', 'Hamstrings', 'Calves'],
    exercises: [
      { exerciseId: 'squat', sets: 4, reps: 5, repsMax: 6, rest: 150 },
      { exerciseId: 'romanian-deadlift', sets: 3, reps: 6, repsMax: 8, rest: 120 },
      { exerciseId: 'leg-press', sets: 3, reps: 8, repsMax: 10, rest: 90 },
      { exerciseId: 'leg-curl', sets: 3, reps: 8, repsMax: 12, rest: 75 },
      { exerciseId: 'calf-raise', sets: 4, reps: 10, repsMax: 15, rest: 60 }
    ]
  },
  {
    id: 'lib-full-strength',
    name: 'Full Body Strength',
    category: 'Strength',
    dumbbellVariantId: 'lib-full-strength-db',
    goal: 'Strength',
    difficulty: 'Intermediate',
    duration: 65,
    equipment: ['Barbell', 'Cable'],
    description: 'One heavy session hitting major movement patterns: squat, hinge, push, pull.',
    muscles: ['Full Body'],
    exercises: [
      { exerciseId: 'squat', sets: 4, reps: 5, repsMax: 6, rest: 150 },
      { exerciseId: 'bench-press', sets: 4, reps: 5, repsMax: 6, rest: 120 },
      { exerciseId: 'deadlift', sets: 3, reps: 3, repsMax: 5, rest: 180 },
      { exerciseId: 'barbell-row', sets: 3, reps: 6, repsMax: 8, rest: 90 },
      { exerciseId: 'overhead-press', sets: 3, reps: 6, repsMax: 8, rest: 90 }
    ]
  },
  {
    id: 'lib-push-strength',
    name: 'Push Strength',
    category: 'Strength',
    dumbbellVariantId: 'lib-push-strength-db',
    goal: 'Strength',
    difficulty: 'Intermediate',
    duration: 50,
    equipment: ['Barbell', 'Dumbbells', 'Cable'],
    description: 'Horizontal and vertical pressing with triceps finishers.',
    muscles: ['Chest', 'Shoulders', 'Triceps'],
    exercises: [
      { exerciseId: 'bench-press', sets: 4, reps: 5, repsMax: 6, rest: 120 },
      { exerciseId: 'overhead-press', sets: 4, reps: 5, repsMax: 6, rest: 120 },
      { exerciseId: 'incline-bench-press', sets: 3, reps: 6, repsMax: 8, rest: 90 },
      { exerciseId: 'triceps-pushdown', sets: 3, reps: 8, repsMax: 12, rest: 60 }
    ]
  },
  {
    id: 'lib-pull-strength',
    name: 'Pull Strength',
    category: 'Strength',
    dumbbellVariantId: 'lib-pull-strength-db',
    goal: 'Strength',
    difficulty: 'Intermediate',
    duration: 50,
    equipment: ['Barbell', 'Pull-up Bar', 'Cable'],
    description: 'Heavy rows, pulls, and hinge work for back thickness and strength.',
    muscles: ['Back', 'Lats', 'Biceps'],
    exercises: [
      { exerciseId: 'deadlift', sets: 3, reps: 3, repsMax: 5, rest: 180 },
      { exerciseId: 'pull-up', sets: 4, reps: 5, repsMax: 8, rest: 120 },
      { exerciseId: 'barbell-row', sets: 4, reps: 6, repsMax: 8, rest: 90 },
      { exerciseId: 'face-pull', sets: 3, reps: 12, repsMax: 15, rest: 60 },
      { exerciseId: 'biceps-curl', sets: 3, reps: 8, repsMax: 12, rest: 60 }
    ]
  },
  {
    id: 'lib-leg-strength',
    name: 'Leg Strength',
    category: 'Strength',
    dumbbellVariantId: 'lib-leg-strength-db',
    goal: 'Strength',
    difficulty: 'Advanced',
    duration: 60,
    equipment: ['Barbell', 'Machine'],
    description: 'High-intensity lower-body strength with unilateral and posterior emphasis.',
    muscles: ['Quads', 'Glutes', 'Hamstrings'],
    exercises: [
      { exerciseId: 'squat', sets: 5, reps: 5, repsMax: 5, rest: 180 },
      { exerciseId: 'romanian-deadlift', sets: 4, reps: 6, repsMax: 8, rest: 120 },
      { exerciseId: 'bulgarian-split-squat', sets: 3, reps: 6, repsMax: 8, rest: 90 },
      { exerciseId: 'leg-curl', sets: 3, reps: 8, repsMax: 10, rest: 75 },
      { exerciseId: 'calf-raise', sets: 4, reps: 10, repsMax: 12, rest: 60 }
    ]
  },

  // —— HYPERTROPHY ——
  {
    id: 'lib-upper-hyper',
    name: 'Upper Hypertrophy',
    category: 'Hypertrophy',
    dumbbellVariantId: 'lib-upper-hyper-db',
    goal: 'Muscle',
    difficulty: 'Intermediate',
    duration: 55,
    equipment: ['Barbell', 'Dumbbells', 'Cable'],
    description: 'Moderate loads, higher volume for upper-body muscle growth.',
    muscles: ['Chest', 'Back', 'Shoulders', 'Arms'],
    exercises: [
      { exerciseId: 'bench-press', sets: 4, reps: 8, repsMax: 12, rest: 90 },
      { exerciseId: 'incline-bench-press', sets: 3, reps: 10, repsMax: 12, rest: 75 },
      { exerciseId: 'barbell-row', sets: 4, reps: 8, repsMax: 12, rest: 90 },
      { exerciseId: 'lat-pulldown', sets: 3, reps: 10, repsMax: 12, rest: 75 },
      { exerciseId: 'lateral-raise', sets: 3, reps: 12, repsMax: 15, rest: 60 },
      { exerciseId: 'biceps-curl', sets: 3, reps: 10, repsMax: 15, rest: 45 },
      { exerciseId: 'triceps-pushdown', sets: 3, reps: 10, repsMax: 15, rest: 45 }
    ]
  },
  {
    id: 'lib-lower-hyper',
    name: 'Lower Hypertrophy',
    category: 'Hypertrophy',
    dumbbellVariantId: 'lib-lower-hyper-db',
    goal: 'Muscle',
    difficulty: 'Intermediate',
    duration: 55,
    equipment: ['Barbell', 'Machine', 'Dumbbells'],
    description: 'Volume-focused leg day for quads, glutes, and hamstrings.',
    muscles: ['Quads', 'Glutes', 'Hamstrings', 'Calves'],
    exercises: [
      { exerciseId: 'squat', sets: 4, reps: 8, repsMax: 12, rest: 120 },
      { exerciseId: 'romanian-deadlift', sets: 3, reps: 10, repsMax: 12, rest: 90 },
      { exerciseId: 'leg-press', sets: 3, reps: 10, repsMax: 15, rest: 90 },
      { exerciseId: 'leg-extension', sets: 3, reps: 12, repsMax: 15, rest: 60 },
      { exerciseId: 'leg-curl', sets: 3, reps: 12, repsMax: 15, rest: 60 },
      { exerciseId: 'calf-raise', sets: 4, reps: 12, repsMax: 20, rest: 45 }
    ]
  },
  {
    id: 'lib-push-hyper',
    name: 'Push Hypertrophy',
    category: 'Hypertrophy',
    dumbbellVariantId: 'lib-push-hyper-db',
    goal: 'Muscle',
    difficulty: 'Intermediate',
    duration: 50,
    equipment: ['Barbell', 'Dumbbells', 'Cable'],
    description: 'Chest, shoulders, and triceps volume work.',
    muscles: ['Chest', 'Shoulders', 'Triceps'],
    exercises: [
      { exerciseId: 'bench-press', sets: 4, reps: 8, repsMax: 12, rest: 90 },
      { exerciseId: 'incline-bench-press', sets: 3, reps: 10, repsMax: 12, rest: 75 },
      { exerciseId: 'dumbbell-bench-press', sets: 3, reps: 10, repsMax: 12, rest: 75 },
      { exerciseId: 'overhead-press', sets: 3, reps: 8, repsMax: 12, rest: 75 },
      { exerciseId: 'lateral-raise', sets: 3, reps: 12, repsMax: 15, rest: 45 },
      { exerciseId: 'triceps-pushdown', sets: 3, reps: 12, repsMax: 15, rest: 45 }
    ]
  },
  {
    id: 'lib-pull-hyper',
    name: 'Pull Hypertrophy',
    category: 'Hypertrophy',
    dumbbellVariantId: 'lib-pull-hyper-db',
    goal: 'Muscle',
    difficulty: 'Intermediate',
    duration: 50,
    equipment: ['Barbell', 'Dumbbells', 'Cable', 'Pull-up Bar'],
    description: 'Back width and thickness with biceps accessories.',
    muscles: ['Lats', 'Upper Back', 'Biceps'],
    exercises: [
      { exerciseId: 'pull-up', sets: 4, reps: 6, repsMax: 10, rest: 90 },
      { exerciseId: 'barbell-row', sets: 4, reps: 8, repsMax: 12, rest: 90 },
      { exerciseId: 'one-arm-dumbbell-row', sets: 3, reps: 10, repsMax: 12, rest: 75 },
      { exerciseId: 'cable-row', sets: 3, reps: 10, repsMax: 12, rest: 75 },
      { exerciseId: 'face-pull', sets: 3, reps: 15, repsMax: 20, rest: 45 },
      { exerciseId: 'hammer-curl', sets: 3, reps: 10, repsMax: 15, rest: 45 }
    ]
  },
  {
    id: 'lib-leg-hyper',
    name: 'Leg Hypertrophy',
    category: 'Hypertrophy',
    dumbbellVariantId: 'lib-leg-hyper-db',
    goal: 'Muscle',
    difficulty: 'Intermediate',
    duration: 55,
    equipment: ['Barbell', 'Machine', 'Dumbbells'],
    description: 'High-volume lower body for muscle growth.',
    muscles: ['Quads', 'Glutes', 'Hamstrings'],
    exercises: [
      { exerciseId: 'squat', sets: 4, reps: 8, repsMax: 12, rest: 120 },
      { exerciseId: 'hip-thrust', sets: 3, reps: 10, repsMax: 15, rest: 90 },
      { exerciseId: 'bulgarian-split-squat', sets: 3, reps: 10, repsMax: 12, rest: 75 },
      { exerciseId: 'leg-extension', sets: 3, reps: 12, repsMax: 15, rest: 60 },
      { exerciseId: 'leg-curl', sets: 3, reps: 12, repsMax: 15, rest: 60 },
      { exerciseId: 'calf-raise', sets: 4, reps: 15, repsMax: 20, rest: 45 }
    ]
  },

  // —— BEGINNER ——
  {
    id: 'lib-beginner-3day',
    name: '3-Day Full Body',
    category: 'Beginner',
    goal: 'General fitness',
    difficulty: 'Beginner',
    duration: 45,
    equipment: ['Barbell', 'Dumbbells', 'Machine'],
    description: 'Simple full-body template. Run 3× per week with a rest day between sessions.',
    muscles: ['Full Body'],
    exercises: [
      { exerciseId: 'squat', sets: 3, reps: 8, repsMax: 10, rest: 120 },
      { exerciseId: 'bench-press', sets: 3, reps: 8, repsMax: 10, rest: 90 },
      { exerciseId: 'barbell-row', sets: 3, reps: 8, repsMax: 10, rest: 90 },
      { exerciseId: 'overhead-press', sets: 2, reps: 8, repsMax: 10, rest: 75 },
      { exerciseId: 'plank', sets: 3, reps: 30, repsMax: 45, rest: 45 }
    ]
  },
  {
    id: 'lib-beginner-4day',
    name: '4-Day Beginner',
    category: 'Beginner',
    goal: 'General fitness',
    difficulty: 'Beginner',
    duration: 40,
    equipment: ['Barbell', 'Dumbbells', 'Cable'],
    description: 'Upper/Lower split for beginners. Alternate Upper A / Lower A / Upper B / Lower B.',
    muscles: ['Full Body'],
    exercises: [
      { exerciseId: 'bench-press', sets: 3, reps: 8, repsMax: 10, rest: 90 },
      { exerciseId: 'barbell-row', sets: 3, reps: 8, repsMax: 10, rest: 90 },
      { exerciseId: 'overhead-press', sets: 2, reps: 8, repsMax: 10, rest: 75 },
      { exerciseId: 'lat-pulldown', sets: 3, reps: 10, repsMax: 12, rest: 75 },
      { exerciseId: 'biceps-curl', sets: 2, reps: 10, repsMax: 12, rest: 60 },
      { exerciseId: 'triceps-pushdown', sets: 2, reps: 10, repsMax: 12, rest: 60 }
    ]
  },
  {
    id: 'lib-beginner-full',
    name: 'Full Body Beginner',
    category: 'Beginner',
    goal: 'General fitness',
    difficulty: 'Beginner',
    duration: 40,
    equipment: ['Dumbbells', 'Machine', 'Bodyweight'],
    description: 'Machine and dumbbell friendly intro session.',
    muscles: ['Full Body'],
    exercises: [
      { exerciseId: 'leg-press', sets: 3, reps: 10, repsMax: 12, rest: 90 },
      { exerciseId: 'dumbbell-bench-press', sets: 3, reps: 10, repsMax: 12, rest: 75 },
      { exerciseId: 'one-arm-dumbbell-row', sets: 3, reps: 10, repsMax: 12, rest: 75 },
      { exerciseId: 'lateral-raise', sets: 2, reps: 12, repsMax: 15, rest: 45 },
      { exerciseId: 'plank', sets: 3, reps: 20, repsMax: 40, rest: 45 }
    ]
  },

  // —— HOME ——
  {
    id: 'lib-home-full',
    name: 'Home Full Body',
    category: 'At Home',
    goal: 'General fitness',
    difficulty: 'Beginner',
    duration: 35,
    equipment: ['Bodyweight', 'Dumbbells'],
    description: 'Minimal-equipment full body you can do at home.',
    muscles: ['Full Body'],
    exercises: [
      { exerciseId: 'squat', sets: 3, reps: 12, repsMax: 15, rest: 75 },
      { exerciseId: 'push-up', sets: 3, reps: 10, repsMax: 15, rest: 60 },
      { exerciseId: 'one-arm-dumbbell-row', sets: 3, reps: 10, repsMax: 12, rest: 60 },
      { exerciseId: 'lunge', sets: 3, reps: 10, repsMax: 12, rest: 60 },
      { exerciseId: 'plank', sets: 3, reps: 30, repsMax: 45, rest: 45 },
      { exerciseId: 'crunch', sets: 3, reps: 15, repsMax: 20, rest: 30 }
    ]
  },
  {
    id: 'lib-home-upper',
    name: 'Home Upper',
    category: 'At Home',
    goal: 'Muscle',
    difficulty: 'Beginner',
    duration: 30,
    equipment: ['Bodyweight', 'Dumbbells'],
    description: 'Upper-body session with minimal equipment.',
    muscles: ['Chest', 'Back', 'Shoulders', 'Arms'],
    exercises: [
      { exerciseId: 'push-up', sets: 4, reps: 10, repsMax: 15, rest: 60 },
      { exerciseId: 'one-arm-dumbbell-row', sets: 3, reps: 10, repsMax: 12, rest: 60 },
      { exerciseId: 'dumbbell-bench-press', sets: 3, reps: 10, repsMax: 12, rest: 75 },
      { exerciseId: 'lateral-raise', sets: 3, reps: 12, repsMax: 15, rest: 45 },
      { exerciseId: 'biceps-curl', sets: 3, reps: 12, repsMax: 15, rest: 45 }
    ]
  },
  {
    id: 'lib-home-lower',
    name: 'Home Lower',
    category: 'At Home',
    goal: 'Muscle',
    difficulty: 'Beginner',
    duration: 30,
    equipment: ['Bodyweight', 'Dumbbells'],
    description: 'Legs and glutes at home.',
    muscles: ['Quads', 'Glutes', 'Hamstrings'],
    exercises: [
      { exerciseId: 'squat', sets: 4, reps: 12, repsMax: 15, rest: 75 },
      { exerciseId: 'lunge', sets: 3, reps: 10, repsMax: 12, rest: 60 },
      { exerciseId: 'romanian-deadlift', sets: 3, reps: 10, repsMax: 12, rest: 75 },
      { exerciseId: 'hip-thrust', sets: 3, reps: 12, repsMax: 15, rest: 60 },
      { exerciseId: 'calf-raise', sets: 3, reps: 15, repsMax: 20, rest: 45 }
    ]
  },
  {
    id: 'lib-home-minimal',
    name: 'Minimal Equipment',
    category: 'At Home',
    goal: 'General fitness',
    difficulty: 'Beginner',
    duration: 25,
    equipment: ['Bodyweight'],
    description: 'No equipment required. Use tempo and range of motion to increase difficulty.',
    muscles: ['Full Body'],
    exercises: [
      { exerciseId: 'push-up', sets: 3, reps: 10, repsMax: 20, rest: 60 },
      { exerciseId: 'squat', sets: 3, reps: 15, repsMax: 20, rest: 60 },
      { exerciseId: 'lunge', sets: 3, reps: 10, repsMax: 15, rest: 45 },
      { exerciseId: 'plank', sets: 3, reps: 30, repsMax: 60, rest: 45 },
      { exerciseId: 'crunch', sets: 3, reps: 15, repsMax: 25, rest: 30 }
    ]
  },

  // —— ATHLETIC ——
  {
    id: 'lib-athletic-full',
    name: 'Athletic Full Body',
    category: 'Athletic',
    dumbbellVariantId: 'lib-athletic-full-db',
    goal: 'Athletic performance',
    difficulty: 'Intermediate',
    duration: 50,
    equipment: ['Barbell', 'Dumbbells', 'Bodyweight'],
    description: 'Strength and control across major patterns for general athleticism.',
    muscles: ['Full Body'],
    exercises: [
      { exerciseId: 'squat', sets: 4, reps: 5, repsMax: 6, rest: 120 },
      { exerciseId: 'bench-press', sets: 3, reps: 5, repsMax: 6, rest: 90 },
      { exerciseId: 'romanian-deadlift', sets: 3, reps: 6, repsMax: 8, rest: 90 },
      { exerciseId: 'pull-up', sets: 3, reps: 5, repsMax: 8, rest: 90 },
      { exerciseId: 'plank', sets: 3, reps: 40, repsMax: 60, rest: 45 }
    ]
  },
  {
    id: 'lib-lower-power',
    name: 'Lower Body Power',
    category: 'Athletic',
    goal: 'Athletic performance',
    difficulty: 'Advanced',
    duration: 45,
    equipment: ['Barbell', 'Dumbbells'],
    description: 'Explosive lower-body strength with unilateral stability work.',
    muscles: ['Quads', 'Glutes', 'Hamstrings'],
    exercises: [
      { exerciseId: 'squat', sets: 4, reps: 4, repsMax: 6, rest: 150 },
      { exerciseId: 'romanian-deadlift', sets: 3, reps: 5, repsMax: 6, rest: 120 },
      { exerciseId: 'bulgarian-split-squat', sets: 3, reps: 6, repsMax: 8, rest: 90 },
      { exerciseId: 'hip-thrust', sets: 3, reps: 6, repsMax: 8, rest: 90 },
      { exerciseId: 'calf-raise', sets: 3, reps: 10, repsMax: 12, rest: 45 }
    ]
  },
  {
    id: 'lib-upper-performance',
    name: 'Upper Body Performance',
    category: 'Athletic',
    dumbbellVariantId: 'lib-upper-performance-db',
    goal: 'Athletic performance',
    difficulty: 'Intermediate',
    duration: 45,
    equipment: ['Barbell', 'Pull-up Bar', 'Cable'],
    description: 'Pressing and pulling strength with scapular health work.',
    muscles: ['Chest', 'Back', 'Shoulders'],
    exercises: [
      { exerciseId: 'bench-press', sets: 4, reps: 5, repsMax: 6, rest: 120 },
      { exerciseId: 'pull-up', sets: 4, reps: 5, repsMax: 8, rest: 90 },
      { exerciseId: 'overhead-press', sets: 3, reps: 5, repsMax: 6, rest: 90 },
      { exerciseId: 'barbell-row', sets: 3, reps: 6, repsMax: 8, rest: 90 },
      { exerciseId: 'face-pull', sets: 3, reps: 15, repsMax: 20, rest: 45 }
    ]
  },
  {
    id: 'lib-core-stability',
    name: 'Core & Stability',
    category: 'Athletic',
    goal: 'Athletic performance',
    difficulty: 'Beginner',
    duration: 25,
    equipment: ['Bodyweight', 'Pull-up Bar'],
    description: 'Core endurance and anti-extension work.',
    muscles: ['Core', 'Abs'],
    exercises: [
      { exerciseId: 'plank', sets: 4, reps: 30, repsMax: 60, rest: 45 },
      { exerciseId: 'hanging-knee-raise', sets: 3, reps: 8, repsMax: 12, rest: 60 },
      { exerciseId: 'crunch', sets: 3, reps: 15, repsMax: 20, rest: 30 },
      { exerciseId: 'push-up', sets: 3, reps: 10, repsMax: 15, rest: 60 }
    ]
  },

  // —— DUMBBELL OPTIONS ——
  {
    id: 'lib-upper-strength-db',
    name: 'Upper Strength (Dumbbells)',
    category: 'Strength',
    goal: 'Strength',
    difficulty: 'Intermediate',
    duration: 50,
    equipment: ['Dumbbells', 'Bench'],
    description: 'Barbell-free upper strength using dumbbells only. Great when a rack is not available.',
    muscles: ['Chest', 'Back', 'Shoulders', 'Arms'],
    exercises: [
      { exerciseId: 'dumbbell-bench-press', sets: 4, reps: 6, repsMax: 8, rest: 120 },
      { exerciseId: 'one-arm-dumbbell-row', sets: 4, reps: 6, repsMax: 8, rest: 90 },
      { exerciseId: 'dumbbell-overhead-press', sets: 3, reps: 6, repsMax: 8, rest: 90 },
      { exerciseId: 'incline-dumbbell-press', sets: 3, reps: 8, repsMax: 10, rest: 75 },
      { exerciseId: 'biceps-curl', sets: 3, reps: 8, repsMax: 12, rest: 60 },
      { exerciseId: 'hammer-curl', sets: 3, reps: 8, repsMax: 12, rest: 60 }
    ]
  },
  {
    id: 'lib-lower-strength-db',
    name: 'Lower Strength (Dumbbells)',
    category: 'Strength',
    goal: 'Strength',
    difficulty: 'Intermediate',
    duration: 50,
    equipment: ['Dumbbells'],
    description: 'Lower-body strength with goblet squats, RDLs, and unilateral work — no barbell required.',
    muscles: ['Quads', 'Glutes', 'Hamstrings', 'Calves'],
    exercises: [
      { exerciseId: 'goblet-squat', sets: 4, reps: 6, repsMax: 8, rest: 120 },
      { exerciseId: 'dumbbell-rdl', sets: 3, reps: 6, repsMax: 8, rest: 120 },
      { exerciseId: 'bulgarian-split-squat', sets: 3, reps: 6, repsMax: 8, rest: 90 },
      { exerciseId: 'hip-thrust', sets: 3, reps: 8, repsMax: 10, rest: 75 },
      { exerciseId: 'calf-raise', sets: 4, reps: 10, repsMax: 15, rest: 45 }
    ]
  },
  {
    id: 'lib-full-strength-db',
    name: 'Full Body Strength (Dumbbells)',
    category: 'Strength',
    goal: 'Strength',
    difficulty: 'Intermediate',
    duration: 55,
    equipment: ['Dumbbells', 'Bench'],
    description: 'Full-body strength session using only dumbbells and a bench.',
    muscles: ['Full Body'],
    exercises: [
      { exerciseId: 'goblet-squat', sets: 4, reps: 6, repsMax: 8, rest: 120 },
      { exerciseId: 'dumbbell-bench-press', sets: 4, reps: 6, repsMax: 8, rest: 90 },
      { exerciseId: 'dumbbell-rdl', sets: 3, reps: 6, repsMax: 8, rest: 90 },
      { exerciseId: 'one-arm-dumbbell-row', sets: 3, reps: 6, repsMax: 8, rest: 90 },
      { exerciseId: 'dumbbell-overhead-press', sets: 3, reps: 6, repsMax: 8, rest: 75 }
    ]
  },
  {
    id: 'lib-push-strength-db',
    name: 'Push Strength (Dumbbells)',
    category: 'Strength',
    goal: 'Strength',
    difficulty: 'Intermediate',
    duration: 45,
    equipment: ['Dumbbells', 'Bench'],
    description: 'Horizontal and vertical pressing with dumbbells only.',
    muscles: ['Chest', 'Shoulders', 'Triceps'],
    exercises: [
      { exerciseId: 'dumbbell-bench-press', sets: 4, reps: 5, repsMax: 6, rest: 120 },
      { exerciseId: 'dumbbell-overhead-press', sets: 4, reps: 5, repsMax: 6, rest: 90 },
      { exerciseId: 'incline-dumbbell-press', sets: 3, reps: 6, repsMax: 8, rest: 90 },
      { exerciseId: 'lateral-raise', sets: 3, reps: 10, repsMax: 15, rest: 60 }
    ]
  },
  {
    id: 'lib-pull-strength-db',
    name: 'Pull Strength (Dumbbells)',
    category: 'Strength',
    goal: 'Strength',
    difficulty: 'Intermediate',
    duration: 45,
    equipment: ['Dumbbells'],
    description: 'Rows, hinges, and arm work with dumbbells. Add a pull-up bar if you have one.',
    muscles: ['Back', 'Lats', 'Biceps'],
    exercises: [
      { exerciseId: 'dumbbell-rdl', sets: 3, reps: 5, repsMax: 6, rest: 120 },
      { exerciseId: 'one-arm-dumbbell-row', sets: 4, reps: 6, repsMax: 8, rest: 90 },
      { exerciseId: 'pull-up', sets: 3, reps: 5, repsMax: 8, rest: 90 },
      { exerciseId: 'biceps-curl', sets: 3, reps: 8, repsMax: 12, rest: 60 },
      { exerciseId: 'hammer-curl', sets: 3, reps: 8, repsMax: 12, rest: 60 }
    ]
  },
  {
    id: 'lib-leg-strength-db',
    name: 'Leg Strength (Dumbbells)',
    category: 'Strength',
    goal: 'Strength',
    difficulty: 'Intermediate',
    duration: 50,
    equipment: ['Dumbbells'],
    description: 'Heavy-ish lower body with dumbbells: squat pattern, hinge, and single-leg work.',
    muscles: ['Quads', 'Glutes', 'Hamstrings'],
    exercises: [
      { exerciseId: 'goblet-squat', sets: 4, reps: 5, repsMax: 6, rest: 150 },
      { exerciseId: 'dumbbell-rdl', sets: 4, reps: 6, repsMax: 8, rest: 120 },
      { exerciseId: 'bulgarian-split-squat', sets: 3, reps: 6, repsMax: 8, rest: 90 },
      { exerciseId: 'dumbbell-lunges', sets: 3, reps: 8, repsMax: 10, rest: 75 },
      { exerciseId: 'calf-raise', sets: 4, reps: 10, repsMax: 12, rest: 45 }
    ]
  },
  {
    id: 'lib-upper-hyper-db',
    name: 'Upper Hypertrophy (Dumbbells)',
    category: 'Hypertrophy',
    goal: 'Muscle',
    difficulty: 'Intermediate',
    duration: 50,
    equipment: ['Dumbbells', 'Bench'],
    description: 'Volume upper-body work using dumbbells for chest, back, shoulders, and arms.',
    muscles: ['Chest', 'Back', 'Shoulders', 'Arms'],
    exercises: [
      { exerciseId: 'dumbbell-bench-press', sets: 4, reps: 8, repsMax: 12, rest: 90 },
      { exerciseId: 'incline-dumbbell-press', sets: 3, reps: 10, repsMax: 12, rest: 75 },
      { exerciseId: 'one-arm-dumbbell-row', sets: 4, reps: 8, repsMax: 12, rest: 75 },
      { exerciseId: 'dumbbell-overhead-press', sets: 3, reps: 8, repsMax: 12, rest: 75 },
      { exerciseId: 'lateral-raise', sets: 3, reps: 12, repsMax: 15, rest: 45 },
      { exerciseId: 'biceps-curl', sets: 3, reps: 10, repsMax: 15, rest: 45 },
      { exerciseId: 'hammer-curl', sets: 3, reps: 10, repsMax: 15, rest: 45 }
    ]
  },
  {
    id: 'lib-lower-hyper-db',
    name: 'Lower Hypertrophy (Dumbbells)',
    category: 'Hypertrophy',
    goal: 'Muscle',
    difficulty: 'Intermediate',
    duration: 50,
    equipment: ['Dumbbells'],
    description: 'Leg and glute hypertrophy with dumbbells only.',
    muscles: ['Quads', 'Glutes', 'Hamstrings', 'Calves'],
    exercises: [
      { exerciseId: 'goblet-squat', sets: 4, reps: 8, repsMax: 12, rest: 90 },
      { exerciseId: 'dumbbell-rdl', sets: 3, reps: 10, repsMax: 12, rest: 90 },
      { exerciseId: 'bulgarian-split-squat', sets: 3, reps: 10, repsMax: 12, rest: 75 },
      { exerciseId: 'hip-thrust', sets: 3, reps: 10, repsMax: 15, rest: 75 },
      { exerciseId: 'dumbbell-lunges', sets: 3, reps: 10, repsMax: 12, rest: 60 },
      { exerciseId: 'calf-raise', sets: 4, reps: 12, repsMax: 20, rest: 45 }
    ]
  },
  {
    id: 'lib-push-hyper-db',
    name: 'Push Hypertrophy (Dumbbells)',
    category: 'Hypertrophy',
    goal: 'Muscle',
    difficulty: 'Intermediate',
    duration: 45,
    equipment: ['Dumbbells', 'Bench'],
    description: 'Chest, shoulders, and triceps volume with dumbbells.',
    muscles: ['Chest', 'Shoulders', 'Triceps'],
    exercises: [
      { exerciseId: 'dumbbell-bench-press', sets: 4, reps: 8, repsMax: 12, rest: 90 },
      { exerciseId: 'incline-dumbbell-press', sets: 3, reps: 10, repsMax: 12, rest: 75 },
      { exerciseId: 'dumbbell-overhead-press', sets: 3, reps: 8, repsMax: 12, rest: 75 },
      { exerciseId: 'lateral-raise', sets: 3, reps: 12, repsMax: 15, rest: 45 },
      { exerciseId: 'push-up', sets: 3, reps: 10, repsMax: 15, rest: 60 }
    ]
  },
  {
    id: 'lib-pull-hyper-db',
    name: 'Pull Hypertrophy (Dumbbells)',
    category: 'Hypertrophy',
    goal: 'Muscle',
    difficulty: 'Intermediate',
    duration: 45,
    equipment: ['Dumbbells'],
    description: 'Back and biceps hypertrophy focused on dumbbell rows and curls.',
    muscles: ['Lats', 'Upper Back', 'Biceps'],
    exercises: [
      { exerciseId: 'one-arm-dumbbell-row', sets: 4, reps: 8, repsMax: 12, rest: 75 },
      { exerciseId: 'dumbbell-rdl', sets: 3, reps: 10, repsMax: 12, rest: 90 },
      { exerciseId: 'pull-up', sets: 3, reps: 6, repsMax: 10, rest: 90 },
      { exerciseId: 'biceps-curl', sets: 3, reps: 10, repsMax: 15, rest: 45 },
      { exerciseId: 'hammer-curl', sets: 3, reps: 10, repsMax: 15, rest: 45 }
    ]
  },
  {
    id: 'lib-leg-hyper-db',
    name: 'Leg Hypertrophy (Dumbbells)',
    category: 'Hypertrophy',
    goal: 'Muscle',
    difficulty: 'Intermediate',
    duration: 50,
    equipment: ['Dumbbells'],
    description: 'High-volume legs and glutes with dumbbells.',
    muscles: ['Quads', 'Glutes', 'Hamstrings'],
    exercises: [
      { exerciseId: 'goblet-squat', sets: 4, reps: 10, repsMax: 12, rest: 90 },
      { exerciseId: 'hip-thrust', sets: 3, reps: 10, repsMax: 15, rest: 75 },
      { exerciseId: 'dumbbell-lunges', sets: 3, reps: 10, repsMax: 12, rest: 60 },
      { exerciseId: 'dumbbell-rdl', sets: 3, reps: 10, repsMax: 12, rest: 75 },
      { exerciseId: 'bulgarian-split-squat', sets: 3, reps: 10, repsMax: 12, rest: 60 },
      { exerciseId: 'calf-raise', sets: 4, reps: 15, repsMax: 20, rest: 45 }
    ]
  },
  {
    id: 'lib-athletic-full-db',
    name: 'Athletic Full Body (Dumbbells)',
    category: 'Athletic',
    goal: 'Athletic performance',
    difficulty: 'Intermediate',
    duration: 45,
    equipment: ['Dumbbells'],
    description: 'Athletic full-body patterns with dumbbells only.',
    muscles: ['Full Body'],
    exercises: [
      { exerciseId: 'goblet-squat', sets: 4, reps: 5, repsMax: 6, rest: 120 },
      { exerciseId: 'dumbbell-bench-press', sets: 3, reps: 5, repsMax: 6, rest: 90 },
      { exerciseId: 'dumbbell-rdl', sets: 3, reps: 6, repsMax: 8, rest: 90 },
      { exerciseId: 'one-arm-dumbbell-row', sets: 3, reps: 6, repsMax: 8, rest: 75 },
      { exerciseId: 'plank', sets: 3, reps: 40, repsMax: 60, rest: 45 }
    ]
  },
  {
    id: 'lib-upper-performance-db',
    name: 'Upper Performance (Dumbbells)',
    category: 'Athletic',
    goal: 'Athletic performance',
    difficulty: 'Intermediate',
    duration: 40,
    equipment: ['Dumbbells', 'Bench'],
    description: 'Pressing and pulling performance work with dumbbells.',
    muscles: ['Chest', 'Back', 'Shoulders'],
    exercises: [
      { exerciseId: 'dumbbell-bench-press', sets: 4, reps: 5, repsMax: 6, rest: 120 },
      { exerciseId: 'one-arm-dumbbell-row', sets: 4, reps: 5, repsMax: 8, rest: 90 },
      { exerciseId: 'dumbbell-overhead-press', sets: 3, reps: 5, repsMax: 6, rest: 90 },
      { exerciseId: 'lateral-raise', sets: 3, reps: 12, repsMax: 15, rest: 45 }
    ]
  },

  // —— PERSONAL PLAN (Jack) ——
  {
    id: 'plan-mon-upper-a',
    name: 'Upper Body A',
    category: 'Program',
    goal: 'All-around fitness',
    difficulty: 'Intermediate',
    duration: 75,
    intensity: 'medium',
    scheduleDay: 1,
    personal: true,
    equipment: ['Dumbbells', 'Bench'],
    description: 'Monday — Upper Body A + timed cardio finisher.',
    muscles: ['Chest', 'Back', 'Shoulders', 'Arms', 'Cardio'],
    exercises: [
      { exerciseId: 'dumbbell-bench-press', sets: 4, reps: 8, repsMax: 10, rest: 120 },
      { exerciseId: 'one-arm-dumbbell-row', sets: 4, reps: 8, repsMax: 10, rest: 90, note: 'Per side' },
      { exerciseId: 'incline-dumbbell-press', sets: 3, reps: 10, repsMax: 12, rest: 90 },
      { exerciseId: 'chest-supported-db-row', sets: 3, reps: 10, repsMax: 12, rest: 90 },
      { exerciseId: 'seated-db-shoulder-press', sets: 3, reps: 8, repsMax: 12, rest: 120 },
      { exerciseId: 'alternating-db-curl', sets: 3, reps: 10, repsMax: 12, rest: 60, note: 'Per arm' },
      { exerciseId: 'lying-db-tricep-extension', sets: 3, reps: 10, repsMax: 12, rest: 60 },
      { exerciseId: 'timed-cardio', sets: 1, reps: 10, rest: 0, note: 'TIMED · 10 min steady cardio' },
      { exerciseId: 'jump-rope', sets: 3, reps: 45, rest: 30, note: 'TIMED · 45 sec on' },
      { exerciseId: 'mountain-climbers', sets: 2, reps: 30, rest: 30, note: 'TIMED · 30 sec on' }
    ]
  },
  {
    id: 'plan-tue-lower-a',
    name: 'Lower Body A',
    category: 'Program',
    goal: 'All-around fitness',
    difficulty: 'Intermediate',
    duration: 75,
    intensity: 'medium',
    scheduleDay: 2,
    personal: true,
    equipment: ['Dumbbells', 'Bench'],
    description: 'Tuesday — Lower Body A + timed cardio finisher.',
    muscles: ['Quads', 'Glutes', 'Hamstrings', 'Core', 'Cardio'],
    exercises: [
      { exerciseId: 'goblet-squat', sets: 4, reps: 8, repsMax: 10, rest: 120 },
      { exerciseId: 'dumbbell-rdl', sets: 4, reps: 8, repsMax: 10, rest: 120 },
      { exerciseId: 'bulgarian-split-squat', sets: 3, reps: 8, repsMax: 10, rest: 105, note: 'Per leg' },
      { exerciseId: 'db-glute-bridge', sets: 3, reps: 10, repsMax: 12, rest: 90 },
      { exerciseId: 'calf-raise', sets: 4, reps: 12, repsMax: 15, rest: 60 },
      { exerciseId: 'weighted-crunch', sets: 3, reps: 12, repsMax: 15, rest: 60 },
      { exerciseId: 'timed-cardio', sets: 1, reps: 12, rest: 0, note: 'TIMED · 12 min steady cardio' },
      { exerciseId: 'high-knees', sets: 3, reps: 30, rest: 30, note: 'TIMED · 30 sec on' },
      { exerciseId: 'burpees', sets: 2, reps: 8, rest: 45, note: 'Controlled pace' }
    ]
  },
  {
    id: 'plan-wed-shoulders-arms',
    name: 'Shoulders, Arms & Core',
    category: 'Program',
    goal: 'All-around fitness',
    difficulty: 'Intermediate',
    duration: 65,
    intensity: 'light',
    scheduleDay: 3,
    personal: true,
    equipment: ['Dumbbells'],
    description: 'Wednesday — Shoulders, arms, core + timed cardio.',
    muscles: ['Shoulders', 'Arms', 'Forearms', 'Core', 'Cardio'],
    exercises: [
      { exerciseId: 'lateral-raise', sets: 3, reps: 12, repsMax: 15, rest: 60 },
      { exerciseId: 'rear-delt-fly', sets: 3, reps: 12, repsMax: 15, rest: 60 },
      { exerciseId: 'hammer-curl', sets: 3, reps: 10, repsMax: 12, rest: 75 },
      { exerciseId: 'seated-db-tricep-extension', sets: 3, reps: 10, repsMax: 12, rest: 75 },
      { exerciseId: 'db-wrist-curl', sets: 3, reps: 12, repsMax: 15, rest: 50 },
      { exerciseId: 'db-reverse-wrist-curl', sets: 2, reps: 12, repsMax: 15, rest: 50 },
      { exerciseId: 'plank', sets: 3, reps: 30, repsMax: 60, rest: 60, note: 'Seconds hold' },
      { exerciseId: 'dead-bug', sets: 3, reps: 8, repsMax: 12, rest: 50, note: 'Per side' },
      { exerciseId: 'timed-cardio', sets: 1, reps: 15, rest: 0, note: 'TIMED · 15 min steady cardio' },
      { exerciseId: 'jump-rope', sets: 4, reps: 40, rest: 20, note: 'TIMED · 40 sec on' }
    ]
  },
  {
    id: 'plan-thu-lower-b',
    name: 'Lower Body B',
    category: 'Program',
    goal: 'All-around fitness',
    difficulty: 'Intermediate',
    duration: 70,
    intensity: 'medium',
    scheduleDay: 4,
    personal: true,
    equipment: ['Dumbbells'],
    description: 'Thursday — Lower Body B + timed cardio finisher.',
    muscles: ['Quads', 'Glutes', 'Hamstrings', 'Core', 'Cardio'],
    exercises: [
      { exerciseId: 'front-loaded-db-squat', sets: 4, reps: 10, repsMax: 12, rest: 120 },
      { exerciseId: 'db-reverse-lunge', sets: 3, reps: 8, repsMax: 10, rest: 105, note: 'Per leg' },
      { exerciseId: 'dumbbell-rdl', sets: 3, reps: 10, repsMax: 12, rest: 120 },
      { exerciseId: 'single-leg-glute-bridge', sets: 3, reps: 10, repsMax: 12, rest: 75, note: 'Per leg' },
      { exerciseId: 'calf-raise', sets: 3, reps: 12, repsMax: 15, rest: 60 },
      { exerciseId: 'side-plank', sets: 3, reps: 30, repsMax: 45, rest: 50, note: 'Seconds per side' },
      { exerciseId: 'timed-cardio', sets: 1, reps: 12, rest: 0, note: 'TIMED · 12 min steady cardio' },
      { exerciseId: 'db-swing', sets: 3, reps: 15, rest: 45 },
      { exerciseId: 'mountain-climbers', sets: 3, reps: 30, rest: 30, note: 'TIMED · 30 sec on' }
    ]
  },
  {
    id: 'plan-fri-upper-b',
    name: 'Upper Body B',
    category: 'Program',
    goal: 'All-around fitness',
    difficulty: 'Intermediate',
    duration: 75,
    intensity: 'medium',
    scheduleDay: 5,
    personal: true,
    equipment: ['Dumbbells', 'Bench'],
    description: 'Friday — Upper Body B + timed cardio finisher.',
    muscles: ['Chest', 'Back', 'Shoulders', 'Arms', 'Cardio'],
    exercises: [
      { exerciseId: 'incline-dumbbell-press', sets: 4, reps: 8, repsMax: 10, rest: 120 },
      { exerciseId: 'chest-supported-db-row', sets: 4, reps: 8, repsMax: 10, rest: 120 },
      { exerciseId: 'dumbbell-bench-press', sets: 3, reps: 10, repsMax: 12, rest: 90 },
      { exerciseId: 'db-pullover', sets: 3, reps: 10, repsMax: 12, rest: 90 },
      { exerciseId: 'lateral-raise', sets: 3, reps: 12, repsMax: 15, rest: 60 },
      { exerciseId: 'cross-body-hammer-curl', sets: 3, reps: 10, repsMax: 12, rest: 60, note: 'Per arm' },
      { exerciseId: 'db-tricep-extension', sets: 2, reps: 12, rest: 60 },
      { exerciseId: 'timed-cardio', sets: 1, reps: 10, rest: 0, note: 'TIMED · 10 min steady cardio' },
      { exerciseId: 'burpees', sets: 3, reps: 8, rest: 45 },
      { exerciseId: 'high-knees', sets: 3, reps: 30, rest: 30, note: 'TIMED · 30 sec on' }
    ]
  },
  {
    id: 'plan-sat-cardio',
    name: 'Saturday Fat Burn',
    category: 'Program',
    goal: 'Fat burning',
    difficulty: 'Intermediate',
    duration: 50,
    intensity: 'recovery',
    scheduleDay: 6,
    optional: false,
    personal: true,
    equipment: ['Dumbbells', 'Bench'],
    description: 'Saturday — Fat-burn session with dumbbells, bench, and timed cardio. Keep effort sustainable.',
    muscles: ['Full Body', 'Cardio'],
    exercises: [
      { exerciseId: 'timed-cardio', sets: 1, reps: 5, rest: 0, note: 'TIMED · 5 min warm-up walk' },
      { exerciseId: 'db-thruster', sets: 3, reps: 12, rest: 45 },
      { exerciseId: 'renegade-row', sets: 3, reps: 10, rest: 45, note: 'Total reps alternating' },
      { exerciseId: 'dumbbell-bench-press', sets: 3, reps: 12, repsMax: 15, rest: 45 },
      { exerciseId: 'goblet-squat', sets: 3, reps: 12, rest: 45 },
      { exerciseId: 'db-swing', sets: 3, reps: 15, rest: 40 },
      { exerciseId: 'mountain-climbers', sets: 3, reps: 40, rest: 20, note: 'TIMED · 40 sec on' },
      { exerciseId: 'burpees', sets: 3, reps: 10, rest: 40 },
      { exerciseId: 'jump-rope', sets: 4, reps: 60, rest: 30, note: 'TIMED · 60 sec on' },
      { exerciseId: 'timed-cardio', sets: 1, reps: 15, rest: 0, note: 'TIMED · 15 min steady cardio finish' }
    ]
  },
  {
    id: 'plan-sun-cardio',
    name: 'Sunday Fat Burn / Active Recovery',
    category: 'Program',
    goal: 'Fat burning',
    difficulty: 'Beginner',
    duration: 40,
    intensity: 'recovery',
    scheduleDay: 0,
    optional: true,
    personal: true,
    equipment: ['Dumbbells', 'Bench'],
    description: 'Sunday — Lighter fat-burn or active recovery with dumbbells and timed cardio. Full rest is OK if sore or under-recovered.',
    muscles: ['Full Body', 'Cardio'],
    exercises: [
      { exerciseId: 'timed-cardio', sets: 1, reps: 8, rest: 0, note: 'TIMED · 8 min easy warm-up' },
      { exerciseId: 'db-squat-press', sets: 3, reps: 12, rest: 50 },
      { exerciseId: 'one-arm-dumbbell-row', sets: 3, reps: 12, rest: 45, note: 'Per side' },
      { exerciseId: 'db-glute-bridge', sets: 3, reps: 15, rest: 40 },
      { exerciseId: 'push-up', sets: 3, reps: 10, repsMax: 15, rest: 45 },
      { exerciseId: 'high-knees', sets: 3, reps: 30, rest: 30, note: 'TIMED · 30 sec on' },
      { exerciseId: 'plank', sets: 3, reps: 40, rest: 40, note: 'Seconds hold' },
      { exerciseId: 'timed-cardio', sets: 1, reps: 20, rest: 0, note: 'TIMED · 20 min easy cardio' },
      { exerciseId: 'light-mobility', sets: 1, reps: 8, rest: 0, note: 'TIMED · 8 min mobility' }
    ]
  }
];

const PROGRAMS = [
  {
    id: 'db-5day-strength',
    name: 'My Dumbbell + Bench Plan',
    description: 'Your personal all-around fitness plan. Adjustable dumbbells (50+ lb) and bench. Mon–Fri lifting, Sat/Sun optional cardio or full rest. Progress by adding reps, then the smallest weight increase.',
    goal: 'Strength',
    equipment: ['Dumbbells', 'Bench'],
    daysPerWeek: 5,
    experience: 'Some experience',
    sessionLength: '60+ min',
    schedule: {
      0: 'plan-sun-cardio', // Sunday optional cardio / rest
      1: 'plan-mon-upper-a',
      2: 'plan-tue-lower-a',
      3: 'plan-wed-shoulders-arms',
      4: 'plan-thu-lower-b',
      5: 'plan-fri-upper-b',
      6: 'plan-sat-cardio'  // Saturday optional cardio
    },
    dayLabels: {
      0: 'Sunday Fat Burn / Rest',
      1: 'Upper Body A (Medium)',
      2: 'Lower Body A (Heavy)',
      3: 'Shoulders, Arms & Core (Light)',
      4: 'Lower Body B (Medium)',
      5: 'Upper Body B (Heavy)',
      6: 'Saturday Fat Burn'
    }
  }
];


const ACCESSORIES = [
  {
    id: 'lifting-straps',
    name: 'Lifting Straps',
    category: 'Grip',
    when: 'Heavy pulls (deadlifts, rows, shrugs) when grip fails before the target muscles.',
    how: 'Loop through the bar, wrap tightly around the shaft, grip over the strap. Keep wrists neutral.',
    tip: 'Train raw grip sometimes; do not use straps on every set forever.'
  },
  {
    id: 'chalk',
    name: 'Chalk / Liquid Chalk',
    category: 'Grip',
    when: 'Sweaty hands, pull-ups, deadlifts, Olympic lifts.',
    how: 'Light coat on palms and fingers. Liquid chalk dries in seconds and is gym-friendly.',
    tip: 'Check gym rules — some ban loose chalk.'
  },
  {
    id: 'wrist-wraps',
    name: 'Wrist Wraps',
    category: 'Support',
    when: 'Heavy pressing (bench, overhead) if wrists feel unstable — not for every warm-up set.',
    how: 'Wrap snug around the wrist joint, thumb loop optional, press support on the palm side.',
    tip: 'If pain is sharp, stop and assess form or see a professional.'
  },
  {
    id: 'knee-sleeves',
    name: 'Knee Sleeves',
    category: 'Support',
    when: 'Squats and lunges for warmth and light compression.',
    how: 'Slide on so the sleeve covers the knee center. Should be tight but not numb your leg.',
    tip: 'Sleeves are not a substitute for good squat mechanics.'
  },
  {
    id: 'knee-wraps',
    name: 'Knee Wraps',
    category: 'Support',
    when: 'Max-effort squats in powerlifting-style training only.',
    how: 'Wrap from below the knee up with firm tension; practice putting them on under fatigue.',
    tip: 'Not needed for general fitness or most home training.'
  },
  {
    id: 'elbow-sleeves',
    name: 'Elbow Sleeves',
    category: 'Support',
    when: 'Pressing volume if elbows feel cranky; mild warmth and support.',
    how: 'Center over the elbow joint; start lighter than you think.',
    tip: 'Persistent elbow pain needs form and recovery review, not tighter sleeves.'
  },
  {
    id: 'belt',
    name: 'Lifting Belt',
    category: 'Support',
    when: 'Heavy squats, deadlifts, overhead work when bracing hard.',
    how: 'Wear over the midsection, tight enough to push abs into the belt on the brace.',
    tip: 'Learn to brace without a belt first; use it as a tool, not a crutch.'
  },
  {
    id: 'pullup-grips',
    name: 'Pull-Up Grips / Fat Grips',
    category: 'Grip',
    when: 'Building grip and forearm strength on pull-ups and rows.',
    how: 'Attach to the bar, hang and pull with a full grip. Expect lower reps at first.',
    tip: 'Great accessory; do not let them replace standard grip work entirely.'
  },
  {
    id: 'ab-wheel',
    name: 'Ab Wheel',
    category: 'Core',
    when: 'Core strength progressions beyond planks.',
    how: 'Kneel, roll forward under control, pull back without sagging the lower back.',
    tip: 'Short range first. Spine neutral beats long range with a sagging back.'
  },
  {
    id: 'resistance-bands',
    name: 'Resistance Bands',
    category: 'Accessory',
    when: 'Warm-ups, face pulls, push-up assistance, travel workouts.',
    how: 'Anchor securely; control the return phase. Match band tension to the movement.',
    tip: 'Excellent for warm-up activation and joint-friendly volume.'
  },
  {
    id: 'foam-roller',
    name: 'Foam Roller',
    category: 'Recovery',
    when: 'After training or on recovery days for large muscle groups.',
    how: 'Slow passes over quads, glutes, upper back. Breathe; avoid rolling bones or the neck.',
    tip: 'Discomfort is ok; sharp pain is not. 30–90 seconds per area is enough.'
  },
  {
    id: 'lacrosse-ball',
    name: 'Lacrosse / Massage Ball',
    category: 'Recovery',
    when: 'Sticky spots in glutes, mid-back, or feet.',
    how: 'Pin the ball against a wall or floor and move slowly around the tight area.',
    tip: 'Keep sessions short. This is recovery, not a contest.'
  }
];

const SPORTS_GUIDES = [
  { id: 'volleyball', category: 'Court', name: 'Volleyball', focus: 'Jump power, shoulder health, landing control.', tips: ['Jump power, shoulder health, landing control in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'beach-volleyball', category: 'Court', name: 'Beach Volleyball', focus: 'Sand conditioning, jump endurance, shoulder care.', tips: ['Sand conditioning, jump endurance, shoulder care in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'basketball', category: 'Court', name: 'Basketball', focus: 'Vertical power, lateral quickness, ankle resilience.', tips: ['Vertical power, lateral quickness, ankle resilience in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'basketball-3x3', category: 'Court', name: '3x3 Basketball', focus: 'Short-bout power, change of direction, conditioning.', tips: ['Short-bout power, change of direction, conditioning in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'netball', category: 'Court', name: 'Netball', focus: 'Jumping, landing, lateral cuts, shoulder stability.', tips: ['Jumping, landing, lateral cuts, shoulder stability in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'tennis', category: 'Court', name: 'Tennis', focus: 'Rotational power, shoulder durability, COD.', tips: ['Rotational power, shoulder durability, COD in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'table-tennis', category: 'Court', name: 'Table Tennis', focus: 'Foot speed, rotational core, shoulder endurance.', tips: ['Foot speed, rotational core, shoulder endurance in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'badminton', category: 'Court', name: 'Badminton', focus: 'Explosive lunges, calf power, shoulder endurance.', tips: ['Explosive lunges, calf power, shoulder endurance in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'squash', category: 'Court', name: 'Squash', focus: 'Lunges, calf power, conditioning.', tips: ['Lunges, calf power, conditioning in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'racquetball', category: 'Court', name: 'Racquetball', focus: 'Lateral speed, rotational power, anaerobic fitness.', tips: ['Lateral speed, rotational power, anaerobic fitness in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'pickleball', category: 'Court', name: 'Pickleball', focus: 'Lateral quickness, hip health, shoulder durability.', tips: ['Lateral quickness, hip health, shoulder durability in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'handball', category: 'Court', name: 'Team Handball', focus: 'Throwing power, lateral speed, contact resilience.', tips: ['Throwing power, lateral speed, contact resilience in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'padel', category: 'Court', name: 'Padel', focus: 'Lateral movement, rotational power, conditioning.', tips: ['Lateral movement, rotational power, conditioning in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'sepak-takraw', category: 'Court', name: 'Sepak Takraw', focus: 'Kick flexibility, single-leg power, agility.', tips: ['Kick flexibility, single-leg power, agility in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'korfball', category: 'Court', name: 'Korfball', focus: 'Jumping, passing endurance, lateral movement.', tips: ['Jumping, passing endurance, lateral movement in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'futsal', category: 'Court', name: 'Futsal', focus: 'Quick cuts, foot speed, anaerobic repeatability.', tips: ['Quick cuts, foot speed, anaerobic repeatability in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'indoor-hockey', category: 'Court', name: 'Indoor Hockey', focus: 'Bent posture strength, quick COD, hip power.', tips: ['Bent posture strength, quick COD, hip power in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'football', category: 'Field', name: 'American Football', focus: 'Power, contact strength, acceleration.', tips: ['Power, contact strength, acceleration in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'flag-football', category: 'Field', name: 'Flag Football', focus: 'Acceleration, COD, light-contact prep.', tips: ['Acceleration, COD, light-contact prep in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'soccer', category: 'Field', name: 'Soccer', focus: 'Repeated sprints, hip strength, durability.', tips: ['Repeated sprints, hip strength, durability in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'soccer-goalkeeper', category: 'Field', name: 'Soccer (Goalkeeper)', focus: 'Lateral power, diving shoulders, core.', tips: ['Lateral power, diving shoulders, core in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'rugby-union', category: 'Field', name: 'Rugby Union', focus: 'Contact strength, speed, work capacity.', tips: ['Contact strength, speed, work capacity in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'rugby-league', category: 'Field', name: 'Rugby League', focus: 'Repeated contact, speed-endurance.', tips: ['Repeated contact, speed-endurance in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'rugby-sevens', category: 'Field', name: 'Rugby Sevens', focus: 'Speed-endurance, lean power.', tips: ['Speed-endurance, lean power in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'lacrosse', category: 'Field', name: 'Lacrosse', focus: 'Rotational power, conditioning, shoulder/core.', tips: ['Rotational power, conditioning, shoulder/core in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'field-hockey', category: 'Field', name: 'Field Hockey', focus: 'Posture strength, hips, repeated sprints.', tips: ['Posture strength, hips, repeated sprints in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'australian-football', category: 'Field', name: 'Australian Football', focus: 'Endurance, kicking hips, jumping, contact.', tips: ['Endurance, kicking hips, jumping, contact in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'gaelic-football', category: 'Field', name: 'Gaelic Football', focus: 'Running volume, hip power, durability.', tips: ['Running volume, hip power, durability in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'hurling', category: 'Field', name: 'Hurling', focus: 'Grip, rotational power, high running load.', tips: ['Grip, rotational power, high running load in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'ultimate', category: 'Field', name: 'Ultimate Frisbee', focus: 'Sprint repeats, cutting, jump endurance.', tips: ['Sprint repeats, cutting, jump endurance in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'disc-ultimate-mixed', category: 'Field', name: 'Ultimate (Mixed)', focus: 'Speed, endurance, cooperative conditioning.', tips: ['Speed, endurance, cooperative conditioning in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'cricket-field', category: 'Field', name: 'Cricket (Fielding focus)', focus: 'Sprint repeats, throwing arm care.', tips: ['Sprint repeats, throwing arm care in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'baseball-field', category: 'Field', name: 'Baseball (Field/Position)', focus: 'COD, arm care, lower-half power.', tips: ['COD, arm care, lower-half power in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'softball-field', category: 'Field', name: 'Softball (Field)', focus: 'Lateral quickness, throwing durability.', tips: ['Lateral quickness, throwing durability in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'tf-overall', category: 'Track & Field', name: 'Overall Performance', focus: 'General power, speed, strength for mixed events.', tips: ['General power, speed, strength for mixed events in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'tf-sprints', category: 'Track & Field', name: 'Sprints (100–400)', focus: 'Acceleration, max velocity, posterior chain.', tips: ['Acceleration, max velocity, posterior chain in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'tf-hurdles', category: 'Track & Field', name: 'Hurdles', focus: 'Hip mobility, single-leg power, rhythm.', tips: ['Hip mobility, single-leg power, rhythm in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'tf-relays', category: 'Track & Field', name: 'Relays', focus: 'Speed, acceleration, team timing fitness.', tips: ['Speed, acceleration, team timing fitness in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'tf-mid', category: 'Track & Field', name: 'Mid-Distance (800–1500)', focus: 'Speed-endurance, strength economy.', tips: ['Speed-endurance, strength economy in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'tf-distance', category: 'Track & Field', name: 'Distance (5K–10K+)', focus: 'Injury resilience, aerobic strength.', tips: ['Injury resilience, aerobic strength in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'tf-steeple', category: 'Track & Field', name: 'Steeplechase', focus: 'Endurance, barrier hip mobility, durability.', tips: ['Endurance, barrier hip mobility, durability in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'tf-racewalk', category: 'Track & Field', name: 'Race Walking', focus: 'Hip mobility, posture, aerobic strength.', tips: ['Hip mobility, posture, aerobic strength in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'tf-lj', category: 'Track & Field', name: 'Long Jump', focus: 'Speed, single-leg power, landing control.', tips: ['Speed, single-leg power, landing control in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'tf-tj', category: 'Track & Field', name: 'Triple Jump', focus: 'Elastic power, single-leg strength, landing.', tips: ['Elastic power, single-leg strength, landing in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'tf-hj', category: 'Track & Field', name: 'High Jump', focus: 'Elastic power, hip mobility, approach speed.', tips: ['Elastic power, hip mobility, approach speed in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'tf-pv', category: 'Track & Field', name: 'Pole Vault', focus: 'Speed, overhead strength, gymnastic control.', tips: ['Speed, overhead strength, gymnastic control in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'tf-sp', category: 'Track & Field', name: 'Shot Put', focus: 'Max strength, rotational or glide power.', tips: ['Max strength, rotational or glide power in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'tf-dt', category: 'Track & Field', name: 'Discus', focus: 'Rotational power, full-body strength.', tips: ['Rotational power, full-body strength in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'tf-ht', category: 'Track & Field', name: 'Hammer Throw', focus: 'Rotational strength, core, grip.', tips: ['Rotational strength, core, grip in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'tf-jt', category: 'Track & Field', name: 'Javelin', focus: 'Rotational power, shoulder arm care, block leg.', tips: ['Rotational power, shoulder arm care, block leg in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'tf-hep', category: 'Track & Field', name: 'Heptathlon', focus: 'Broad multi-event strength and speed.', tips: ['Broad multi-event strength and speed in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'tf-dec', category: 'Track & Field', name: 'Decathlon', focus: 'Broad multi-event strength and speed.', tips: ['Broad multi-event strength and speed in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'tf-combined', category: 'Track & Field', name: 'Combined Events (General)', focus: 'Balanced power across run/jump/throw.', tips: ['Balanced power across run/jump/throw in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'swimming', category: 'Water', name: 'Swimming (General)', focus: 'Shoulder health, core, aerobic engine.', tips: ['Shoulder health, core, aerobic engine in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'swim-free', category: 'Water', name: 'Freestyle / Open Water', focus: 'Aerobic capacity, shoulder endurance.', tips: ['Aerobic capacity, shoulder endurance in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'swim-fly', category: 'Water', name: 'Butterfly', focus: 'Shoulder power, core undulation.', tips: ['Shoulder power, core undulation in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'swim-back', category: 'Water', name: 'Backstroke', focus: 'Shoulder stability, posterior chain posture.', tips: ['Shoulder stability, posterior chain posture in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'swim-breast', category: 'Water', name: 'Breaststroke', focus: 'Hip mobility, adductor strength.', tips: ['Hip mobility, adductor strength in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'swim-im', category: 'Water', name: 'Individual Medley', focus: 'Balanced stroke strength and mobility.', tips: ['Balanced stroke strength and mobility in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'water-polo', category: 'Water', name: 'Water Polo', focus: 'Shoulder endurance, core, eggbeater legs.', tips: ['Shoulder endurance, core, eggbeater legs in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'diving', category: 'Water', name: 'Diving', focus: 'Body control, core, ankle/shoulder stability.', tips: ['Body control, core, ankle/shoulder stability in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'artistic-swim', category: 'Water', name: 'Artistic Swimming', focus: 'Core control, leg endurance, flexibility.', tips: ['Core control, leg endurance, flexibility in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'rowing', category: 'Water', name: 'Rowing / Crew', focus: 'Posterior chain, aerobic capacity, posture.', tips: ['Posterior chain, aerobic capacity, posture in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'kayak', category: 'Water', name: 'Kayak', focus: 'Rotational torso strength, aerobic engine.', tips: ['Rotational torso strength, aerobic engine in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'canoe', category: 'Water', name: 'Canoe', focus: 'Unilateral torso strength, hip stability.', tips: ['Unilateral torso strength, hip stability in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'surfski', category: 'Water', name: 'Surfski / Ocean Paddle', focus: 'Aerobic power, rotational endurance.', tips: ['Aerobic power, rotational endurance in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'surfing', category: 'Water', name: 'Surfing', focus: 'Paddle endurance, pop-up power, balance.', tips: ['Paddle endurance, pop-up power, balance in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'bodyboarding', category: 'Water', name: 'Bodyboarding', focus: 'Paddle fitness, shoulder endurance.', tips: ['Paddle fitness, shoulder endurance in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'water-ski', category: 'Water', name: 'Water Ski', focus: 'Grip, posterior chain, core under load.', tips: ['Grip, posterior chain, core under load in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'wakeboard', category: 'Water', name: 'Wakeboard', focus: 'Grip, rotational pop, knee resilience.', tips: ['Grip, rotational pop, knee resilience in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'sailing', category: 'Water', name: 'Sailing', focus: 'Isometric core/legs, grip, balance.', tips: ['Isometric core/legs, grip, balance in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'combat-general', category: 'Combat', name: 'Combat (General)', focus: 'Strength, neck/shoulder durability, conditioning.', tips: ['Strength, neck/shoulder durability, conditioning in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'boxing', category: 'Combat', name: 'Boxing', focus: 'Rotational power, shoulder endurance, footwork.', tips: ['Rotational power, shoulder endurance, footwork in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'kickboxing', category: 'Combat', name: 'Kickboxing', focus: 'Hip power, single-leg strength, conditioning.', tips: ['Hip power, single-leg strength, conditioning in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'muay-thai', category: 'Combat', name: 'Muay Thai', focus: 'Clinches, kicks, conditioning, shin resilience.', tips: ['Clinches, kicks, conditioning, shin resilience in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'mma', category: 'Combat', name: 'MMA', focus: 'Mixed strength, clinch durability, engine.', tips: ['Mixed strength, clinch durability, engine in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'bjj', category: 'Combat', name: 'BJJ', focus: 'Grip, hips, durability, flexible strength.', tips: ['Grip, hips, durability, flexible strength in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'wrestling', category: 'Combat', name: 'Wrestling', focus: 'Grip, hips, pulling strength, capacity.', tips: ['Grip, hips, pulling strength, capacity in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'judo', category: 'Combat', name: 'Judo', focus: 'Pulling power, hips, grip, explosive entries.', tips: ['Pulling power, hips, grip, explosive entries in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'taekwondo', category: 'Combat', name: 'Taekwondo', focus: 'Hip flexibility, single-leg power, core.', tips: ['Hip flexibility, single-leg power, core in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'karate', category: 'Combat', name: 'Karate', focus: 'Hip mobility, single-leg balance, controlled power.', tips: ['Hip mobility, single-leg balance, controlled power in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'tkd-olympic', category: 'Combat', name: 'Olympic TKD', focus: 'Speed kicking, single-leg power.', tips: ['Speed kicking, single-leg power in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'fencing', category: 'Combat', name: 'Fencing', focus: 'Lunge power, ankle stability, core control.', tips: ['Lunge power, ankle stability, core control in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'kendo', category: 'Combat', name: 'Kendo', focus: 'Core posture, grip, hip drive.', tips: ['Core posture, grip, hip drive in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'krav', category: 'Combat', name: 'Krav Maga / Self-Defense', focus: 'Functional power, conditioning, durability.', tips: ['Functional power, conditioning, durability in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'sambo', category: 'Combat', name: 'Sambo', focus: 'Grip, hips, throwing power.', tips: ['Grip, hips, throwing power in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'sumo', category: 'Combat', name: 'Sumo', focus: 'Max strength, hip power, balance.', tips: ['Max strength, hip power, balance in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'martial-arts-trad', category: 'Combat', name: 'Traditional Martial Arts', focus: 'Flexibility, balance, controlled power.', tips: ['Flexibility, balance, controlled power in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'powerlifting', category: 'Strength Sports', name: 'Powerlifting', focus: 'Squat, bench, deadlift strength and recovery.', tips: ['Squat, bench, deadlift strength and recovery in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'weightlifting', category: 'Strength Sports', name: 'Olympic Weightlifting', focus: 'Power, mobility, precise positioning.', tips: ['Power, mobility, precise positioning in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'strongman', category: 'Strength Sports', name: 'Strongman', focus: 'Odd-object strength, grip, loaded conditioning.', tips: ['Odd-object strength, grip, loaded conditioning in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'bodybuilding', category: 'Strength Sports', name: 'Bodybuilding / Physique', focus: 'Hypertrophy, recovery, balanced structure.', tips: ['Hypertrophy, recovery, balanced structure in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'classic-physique', category: 'Strength Sports', name: 'Classic Physique', focus: 'Hypertrophy with shape emphasis.', tips: ['Hypertrophy with shape emphasis in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'crossfit-style', category: 'Strength Sports', name: 'Cross-Training / Fitness Sport', focus: 'Mixed strength and conditioning.', tips: ['Mixed strength and conditioning in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'hyrox', category: 'Strength Sports', name: 'HYROX', focus: 'Engine + strength endurance.', tips: ['Engine + strength endurance in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'climbing-comp', category: 'Strength Sports', name: 'Competition Climbing', focus: 'Finger strength, pulling, body tension.', tips: ['Finger strength, pulling, body tension in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'bouldering', category: 'Strength Sports', name: 'Bouldering', focus: 'Power, finger strength, core tension.', tips: ['Power, finger strength, core tension in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'speed-climb', category: 'Strength Sports', name: 'Speed Climbing', focus: 'Explosive pulling and leg drive.', tips: ['Explosive pulling and leg drive in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'armwrestling', category: 'Strength Sports', name: 'Arm Wrestling', focus: 'Hand, wrist, upper-arm strength.', tips: ['Hand, wrist, upper-arm strength in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'grip-sport', category: 'Strength Sports', name: 'Grip Sport', focus: 'Crush, pinch, support grip strength.', tips: ['Crush, pinch, support grip strength in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'streetlifting', category: 'Strength Sports', name: 'Streetlifting', focus: 'Weighted calisthenics strength.', tips: ['Weighted calisthenics strength in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'calisthenics-sport', category: 'Strength Sports', name: 'Calisthenics Sport', focus: 'Relative strength, skills, control.', tips: ['Relative strength, skills, control in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'running', category: 'Endurance', name: 'Running (General)', focus: 'Injury resilience, aerobic base.', tips: ['Injury resilience, aerobic base in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'road-racing', category: 'Endurance', name: 'Road Racing', focus: 'Mileage durability, economy.', tips: ['Mileage durability, economy in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'trail-running', category: 'Endurance', name: 'Trail Running', focus: 'Uphill strength, ankle stability.', tips: ['Uphill strength, ankle stability in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'ultra-running', category: 'Endurance', name: 'Ultra Running', focus: 'Durability, fueling, joint resilience.', tips: ['Durability, fueling, joint resilience in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'track-distance-end', category: 'Endurance', name: 'Track Distance', focus: 'Speed-endurance, strength economy.', tips: ['Speed-endurance, strength economy in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'cycling', category: 'Endurance', name: 'Cycling (Road)', focus: 'Leg strength, hip health, posture.', tips: ['Leg strength, hip health, posture in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'mtb', category: 'Endurance', name: 'Mountain Biking', focus: 'Technical strength, upper-body endurance.', tips: ['Technical strength, upper-body endurance in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'bmx-race', category: 'Endurance', name: 'BMX Racing', focus: 'Explosive power, acceleration.', tips: ['Explosive power, acceleration in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'gravel', category: 'Endurance', name: 'Gravel Cycling', focus: 'Endurance, bike handling durability.', tips: ['Endurance, bike handling durability in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'triathlon', category: 'Endurance', name: 'Triathlon', focus: 'Balanced swim/bike/run durability.', tips: ['Balanced swim/bike/run durability in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'duathlon', category: 'Endurance', name: 'Duathlon', focus: 'Run-bike-run durability.', tips: ['Run-bike-run durability in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'aquathlon', category: 'Endurance', name: 'Aquathlon', focus: 'Swim-run transitions, efficiency.', tips: ['Swim-run transitions, efficiency in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'obstacle', category: 'Endurance', name: 'Obstacle Course / OCR', focus: 'Running engine, grip, work capacity.', tips: ['Running engine, grip, work capacity in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'hiking', category: 'Endurance', name: 'Hiking', focus: 'Leg endurance, load carriage, feet.', tips: ['Leg endurance, load carriage, feet in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'mountaineering', category: 'Endurance', name: 'Mountaineering', focus: 'Load carriage, altitude durability.', tips: ['Load carriage, altitude durability in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'rucking', category: 'Endurance', name: 'Rucking', focus: 'Loaded walk strength, posture.', tips: ['Loaded walk strength, posture in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'nordic-ski-end', category: 'Endurance', name: 'Nordic Ski (Endurance)', focus: 'Posterior chain, aerobic power.', tips: ['Posterior chain, aerobic power in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'hockey', category: 'Ice & Winter', name: 'Ice Hockey', focus: 'Skating legs, rotational power, contact.', tips: ['Skating legs, rotational power, contact in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'hockey-goalie', category: 'Ice & Winter', name: 'Ice Hockey (Goalie)', focus: 'Lateral power, hip mobility, core.', tips: ['Lateral power, hip mobility, core in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'figure-skating', category: 'Ice & Winter', name: 'Figure Skating', focus: 'Single-leg power, landing control, mobility.', tips: ['Single-leg power, landing control, mobility in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'speed-skating', category: 'Ice & Winter', name: 'Speed Skating', focus: 'Lateral leg power, aerobic capacity.', tips: ['Lateral leg power, aerobic capacity in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'short-track', category: 'Ice & Winter', name: 'Short Track Speed Skating', focus: 'COD power, lean strength.', tips: ['COD power, lean strength in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'curling', category: 'Ice & Winter', name: 'Curling', focus: 'Hip mobility, sliding-leg strength, core.', tips: ['Hip mobility, sliding-leg strength, core in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'bobsled', category: 'Ice & Winter', name: 'Bobsled', focus: 'Start power, sprint strength, bracing.', tips: ['Start power, sprint strength, bracing in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'skeleton', category: 'Ice & Winter', name: 'Skeleton', focus: 'Start power, core bracing.', tips: ['Start power, core bracing in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'luge', category: 'Ice & Winter', name: 'Luge', focus: 'Core bracing, start strength.', tips: ['Core bracing, start strength in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'skiing-alpine', category: 'Ice & Winter', name: 'Alpine Skiing', focus: 'Quad endurance, hips, balance.', tips: ['Quad endurance, hips, balance in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'skiing-park', category: 'Ice & Winter', name: 'Ski Park / Freestyle', focus: 'Impact resilience, single-leg power.', tips: ['Impact resilience, single-leg power in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'snowboarding', category: 'Ice & Winter', name: 'Snowboarding', focus: 'Balance, edge strength, impact tolerance.', tips: ['Balance, edge strength, impact tolerance in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'biathlon', category: 'Ice & Winter', name: 'Biathlon', focus: 'Ski engine, calm strength under fatigue.', tips: ['Ski engine, calm strength under fatigue in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'snowshoe', category: 'Ice & Winter', name: 'Snowshoe Racing', focus: 'Leg endurance, hip strength.', tips: ['Leg endurance, hip strength in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'baseball', category: 'Bat & Ball', name: 'Baseball', focus: 'Rotational power, arm care, lower-half drive.', tips: ['Rotational power, arm care, lower-half drive in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'baseball-pitcher', category: 'Bat & Ball', name: 'Baseball (Pitcher)', focus: 'Arm care, hip/shoulder separation, legs.', tips: ['Arm care, hip/shoulder separation, legs in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'softball', category: 'Bat & Ball', name: 'Softball', focus: 'Rotational power, shoulder care.', tips: ['Rotational power, shoulder care in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'softball-only', category: 'Bat & Ball', name: 'Fastpitch Softball', focus: 'Windmill arm care, lower-half drive.', tips: ['Windmill arm care, lower-half drive in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'cricket', category: 'Bat & Ball', name: 'Cricket', focus: 'Rotational power, bowling shoulder, sprints.', tips: ['Rotational power, bowling shoulder, sprints in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'cricket-bowling', category: 'Bat & Ball', name: 'Cricket (Bowling)', focus: 'Shoulder/hip durability, repeat sprints.', tips: ['Shoulder/hip durability, repeat sprints in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'golf', category: 'Bat & Ball', name: 'Golf', focus: 'Rotational power, hip mobility, spinal health.', tips: ['Rotational power, hip mobility, spinal health in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'golf-power', category: 'Bat & Ball', name: 'Golf (Power Focus)', focus: 'Clubhead speed, rotational strength.', tips: ['Clubhead speed, rotational strength in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'bowling', category: 'Bat & Ball', name: 'Bowling', focus: 'Hip/ankle stability, controlled rotation.', tips: ['Hip/ankle stability, controlled rotation in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'disc-golf', category: 'Bat & Ball', name: 'Disc Golf', focus: 'Rotational power, walking volume.', tips: ['Rotational power, walking volume in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'rounders', category: 'Bat & Ball', name: 'Rounders / Softball variants', focus: 'Sprint, rotational hitting, throwing.', tips: ['Sprint, rotational hitting, throwing in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'kickball', category: 'Bat & Ball', name: 'Kickball', focus: 'Casual power, sprint, lateral moves.', tips: ['Casual power, sprint, lateral moves in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'gymnastics', category: 'Skills', name: 'Gymnastics', focus: 'Relative strength, shoulder stability, control.', tips: ['Relative strength, shoulder stability, control in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'gymnastics-men', category: 'Skills', name: 'Men\'s Gymnastics', focus: 'Upper-body strength, skills, core.', tips: ['Upper-body strength, skills, core in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'gymnastics-women', category: 'Skills', name: 'Women\'s Gymnastics', focus: 'Power, mobility, skill endurance.', tips: ['Power, mobility, skill endurance in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'cheer', category: 'Skills', name: 'Cheer / Stunt', focus: 'Power, stability, shoulder/core for bases/flyers.', tips: ['Power, stability, shoulder/core for bases/flyers in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'dance', category: 'Skills', name: 'Dance', focus: 'Mobility, single-leg strength, foot health.', tips: ['Mobility, single-leg strength, foot health in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'ballet', category: 'Skills', name: 'Ballet', focus: 'Foot strength, hips, posture, control.', tips: ['Foot strength, hips, posture, control in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'hiphop-dance', category: 'Skills', name: 'Hip-Hop / Commercial Dance', focus: 'Power, conditioning, joint resilience.', tips: ['Power, conditioning, joint resilience in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'parkour', category: 'Skills', name: 'Parkour / Freerunning', focus: 'Jump/land strength, pushing strength.', tips: ['Jump/land strength, pushing strength in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'skateboarding', category: 'Skills', name: 'Skateboarding', focus: 'Ankle strength, balance, impact tolerance.', tips: ['Ankle strength, balance, impact tolerance in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'rollerskate', category: 'Skills', name: 'Roller Skating / Blading', focus: 'Lateral leg strength, balance, ankles.', tips: ['Lateral leg strength, balance, ankles in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'bmx-freestyle', category: 'Skills', name: 'BMX Freestyle', focus: 'Impact resilience, grip, full-body tension.', tips: ['Impact resilience, grip, full-body tension in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'scooter', category: 'Skills', name: 'Scooter Freestyle', focus: 'Impact resilience, wrist/shoulder durability.', tips: ['Impact resilience, wrist/shoulder durability in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'surfing-skate', category: 'Skills', name: 'Surfskate', focus: 'Balance, rotational flow, ankles.', tips: ['Balance, rotational flow, ankles in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'climbing-rec', category: 'Skills', name: 'Climbing (Recreational)', focus: 'Pulling strength, fingers, technique.', tips: ['Pulling strength, fingers, technique in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'yoga-perf', category: 'Skills', name: 'Yoga / Movement Practice', focus: 'Mobility, control, breathing under tension.', tips: ['Mobility, control, breathing under tension in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'esports', category: 'Skills', name: 'Esports / Gaming', focus: 'Posture, neck/shoulder health, daily movement.', tips: ['Posture, neck/shoulder health, daily movement in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'cycling-track', category: 'Wheeled & Motors', name: 'Track Cycling', focus: 'Max power, acceleration, lactate tolerance.', tips: ['Max power, acceleration, lactate tolerance in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'motorcycle-mx', category: 'Wheeled & Motors', name: 'Motocross', focus: 'Grip, core bracing, leg endurance.', tips: ['Grip, core bracing, leg endurance in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'motorcycle-road', category: 'Wheeled & Motors', name: 'Road Motorcycle', focus: 'Neck/core endurance, grip.', tips: ['Neck/core endurance, grip in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'karting', category: 'Wheeled & Motors', name: 'Karting', focus: 'Neck strength, core, grip endurance.', tips: ['Neck strength, core, grip endurance in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'auto-racing', category: 'Wheeled & Motors', name: 'Auto Racing', focus: 'Neck strength, core, reaction fitness.', tips: ['Neck strength, core, reaction fitness in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'bmx-dirt', category: 'Wheeled & Motors', name: 'BMX Dirt', focus: 'Power, impact tolerance.', tips: ['Power, impact tolerance in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'yoga-general', category: 'Mind-Body & Wellness', name: 'Yoga', focus: 'Mobility, control, stress management.', tips: ['Mobility, control, stress management in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'pilates', category: 'Mind-Body & Wellness', name: 'Pilates', focus: 'Core control, posture, controlled strength.', tips: ['Core control, posture, controlled strength in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'mobility', category: 'Mind-Body & Wellness', name: 'Mobility / Movement Culture', focus: 'Joint range, control, longevity.', tips: ['Joint range, control, longevity in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'tai-chi', category: 'Mind-Body & Wellness', name: 'Tai Chi', focus: 'Balance, controlled strength, calm focus.', tips: ['Balance, controlled strength, calm focus in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'adaptive-general', category: 'Adaptive & Inclusive', name: 'Adaptive Sport (General)', focus: 'Individualized strength, mobility, capacity.', tips: ['Individualized strength, mobility, capacity in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'wheelchair-bball', category: 'Adaptive & Inclusive', name: 'Wheelchair Basketball', focus: 'Upper-body power, shoulder health, COD.', tips: ['Upper-body power, shoulder health, COD in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'wheelchair-tennis', category: 'Adaptive & Inclusive', name: 'Wheelchair Tennis', focus: 'Shoulder endurance, rotational power.', tips: ['Shoulder endurance, rotational power in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'para-athletics', category: 'Adaptive & Inclusive', name: 'Para Athletics', focus: 'Event-specific power and resilience.', tips: ['Event-specific power and resilience in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'sitting-volleyball', category: 'Adaptive & Inclusive', name: 'Sitting Volleyball', focus: 'Upper-body power, core, shoulder care.', tips: ['Upper-body power, core, shoulder care in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'general', category: 'General', name: 'General Strength & Health', focus: 'Balanced strength, conditioning, recovery.', tips: ['Balanced strength, conditioning, recovery in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'none', category: 'General', name: 'No sport focus', focus: 'Overall fitness without sport bias.', tips: ['Overall fitness without sport bias in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'tactical', category: 'General', name: 'Tactical / First Responder', focus: 'Work capacity, carries, durable joints.', tips: ['Work capacity, carries, durable joints in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'military', category: 'General', name: 'Military Prep', focus: 'Ruck capacity, relative strength, running durability.', tips: ['Ruck capacity, relative strength, running durability in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'firefighter', category: 'General', name: 'Firefighter / LE Fitness', focus: 'Carries, climbs, heat-tolerant capacity.', tips: ['Carries, climbs, heat-tolerant capacity in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'equestrian', category: 'General', name: 'Equestrian', focus: 'Core stability, hip mobility, posture.', tips: ['Core stability, hip mobility, posture in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'rodeo', category: 'General', name: 'Rodeo', focus: 'Grip, core bracing, explosive hips.', tips: ['Grip, core bracing, explosive hips in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'outdoor-general', category: 'General', name: 'Outdoor Recreation', focus: 'Mixed hiking, climbing, carry fitness.', tips: ['Mixed hiking, climbing, carry fitness in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'youth-multi', category: 'General', name: 'Youth Multi-Sport', focus: 'Broad movement, fun capacity, long-term athletic.', tips: ['Broad movement, fun capacity, long-term athletic in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
  { id: 'masters', category: 'General', name: 'Masters / 35+ Performance', focus: 'Strength, joint health, recovery emphasis.', tips: ['Strength, joint health, recovery emphasis in the gym and on the field', 'Prioritize recovery around competitions', 'Progress skill and load gradually', 'Keep 1–3 reps in reserve on most gym sets'] },
];

const RECOVERY_TIPS = [
  { title: 'Sleep', body: '7–9 hours most nights. Consistent schedule beats occasional long catch-up sleeps.' },
  { title: 'Protein & calories', body: 'Hit your protein target daily. Under-eating hard while training hard stalls recovery.' },
  { title: 'Easy movement', body: 'Walks, light cycling, and mobility on off days improve blood flow without frying you.' },
  { title: 'Deload', body: 'Every 6–8 hard weeks, cut volume ~40% for a week if joints or motivation are dragging.' },
  { title: 'Soreness vs pain', body: 'Muscle soreness is normal. Sharp joint pain is a stop signal — change the movement or rest.' },
  { title: 'Stress & stress', body: 'Work stress and training stress share a budget. Scale gym intensity when life is chaotic.' }
];
