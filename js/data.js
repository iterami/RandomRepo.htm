'use strict';

function random_any(){
    const types = [
      'game',
      'simulation',
      'tool',
    ];

    globalThis['random_' + types[core_random_integer({
      'max': 3,
    })]]();
}

function random_game(){
    const repos = [
      '../BlindMouse.htm/index.htm',
      '../Click.htm/index.htm',
      '../Countdown.htm/index.htm',
      '../Dropdown.htm/index.htm',
      '../FractalRunner-2D3D.htm/index.htm',
      '../Guess.htm/index.htm',
      '../Hexagons-2D.htm/index.htm',
      '../Hrad.htm/index.htm',
      '../Jetpack-2D.htm/index.htm',
      '../Match.htm/index.htm',
      '../Multiverse.htm/index.htm',
      '../Particleball-2D.htm/index.htm',
      '../RockPaperScissors.htm/index.htm',
      '../Slots.htm/index.htm',
      '../Snakish.htm/index.htm',
      '../SpeedButton.htm/index.htm',
      '../SpeedShape.htm/index.htm',
      '../SpeedText.htm/index.htm',
      '../SpeedType.htm/index.htm',
      '../Sudoku.htm/index.htm',
      '../U1.htm/index.htm',
    ];

    globalThis.open(
      repos[core_random_integer({
        'max': repos.length,
      })],
      core_storage_data['target']
    );
}

function random_github(){
    const repos = [
      'https://github.com/iterami/EVE-Overviews.yaml',
      'https://github.com/iterami/GMod-Addons.lua',
      'https://github.com/iterami/iterami.github.io',
      'https://github.com/iterami/SC-AI.cpp',
      'https://github.com/iterami/Scripts',
      'https://github.com/iterami/TextEditor.gtk',
      'https://github.com/iterami/WoW-Addons.lua',
      'https://github.com/iterami/WZ2100-AI.js',
    ];

    globalThis.open(
      repos[core_random_integer({
        'max': repos.length,
      })],
      core_storage_data['target']
    );
}

function random_iterami(){
    const repos = [
      '../9YG0E6r.htm/index.htm',
      '../Aquarium-2D.htm/index.htm',
      '../AudioEditor.htm/index.htm',
      '../BaseConverter.htm/index.htm',
      '../BinaryDataEndecoder.htm/index.htm',
      '../BlindMouse.htm/index.htm',
      '../Click.htm/index.htm',
      '../Clock.htm/index.htm',
      '../ColorDrops.htm/index.htm',
      '../ColorSelector.htm/index.htm',
      '../ColorSquares.htm/index.htm',
      '../ColorSteps.htm/index.htm',
      '../ColorWaves.htm/index.htm',
      '../common/index.htm',
      '../Countdown.htm/index.htm',
      '../D2LoD-ArcaneSanctuary.htm/index.htm',
      '../Docs.htm/index.htm',
      '../DotEyeIllusion.htm/index.htm',
      '../Dropdown.htm/index.htm',
      '../Duel.htm/index.htm',
      '../ESP-Test.htm/index.htm',
      '../Finances.htm/index.htm',
      '../Fireworks-2D.htm/index.htm',
      '../FractalRunner-2D3D.htm/index.htm',
      '../GradientIllusion.htm/index.htm',
      '../Guess.htm/index.htm',
      '../Guides.htm/index.htm',
      '../Hallway-2D3D.htm/index.htm',
      '../Hexagons-2D.htm/index.htm',
      '../Hrad.htm/index.htm',
      '../Interpreters.htm/index.htm',
      '../Jetpack-2D.htm/index.htm',
      '../LayeredSnake-2D3D.htm/index.htm',
      '../LocalStorage.htm/index.htm',
      '../Match.htm/index.htm',
      '../Math.htm/index.htm',
      '../MediaDevicesTest.htm/index.htm',
      '../Multiverse.htm/index.htm',
      '../MultiverseEditor.htm/index.htm',
      '../MultiverseViewer.htm/index.htm',
      '../Notes.htm/index.htm',
      '../Particleball-2D.htm/index.htm',
      '../ParticleRun-2D.htm/index.htm',
      '../PasswordGenerator.htm/index.htm',
      '../PixelEditor.htm/index.htm',
      '../PlusPlus.htm/index.htm',
      '../Poem.htm/index.htm',
      '../Profiler.htm/index.htm',
      '../QjnyYap.htm/index.htm',
      '../Rain-2D.htm/index.htm',
      '../random_number_test.htm/index.htm',
      '../RandomSCP.htm/index.htm',
      '../ReactionTest.htm/index.htm',
      '../RNG.htm/index.htm',
      '../RockPaperScissors.htm/index.htm',
      '../RomanNumerals.htm/index.htm',
      '../RTS-Boxing.htm/index.htm',
      '../Slots.htm/index.htm',
      '../Snakish.htm/index.htm',
      '../SnowyMountains.htm/index.htm',
      '../SolarSystem-2D.htm/index.htm',
      '../SpeedButton.htm/index.htm',
      '../SpeedShape.htm/index.htm',
      '../SpeedText.htm/index.htm',
      '../SpeedType.htm/index.htm',
      '../Starfield-2D3D.htm/index.htm',
      '../Sudoku.htm/index.htm',
      '../TextInfo.htm/index.htm',
      '../Time.htm/index.htm',
      '../TimeColors.htm/index.htm',
      '../Timer.htm/index.htm',
      '../Trains-2D.htm/index.htm',
      '../Tubes-2D3D.htm/index.htm',
      '../U1.htm/index.htm',
      '../UnitConverter.htm/index.htm',
      '../URI.htm/index.htm',
      '../Warped.htm/index.htm',
      '../WASD-2D.htm/index.htm',
      '../WindowInfo.htm/index.htm',
    ];

    globalThis.open(
      repos[core_random_integer({
        'max': repos.length,
      })],
      core_storage_data['target']
    );
}

function random_other(){
    const repos = [
      'https://github.com/iterami/EVE-Overviews.yaml',
      'https://github.com/iterami/GMod-Addons.lua',
      '../Guides.htm/index.htm',
      '../Interpreters.htm/index.htm',
      'https://github.com/iterami/MC-DataPacks',
      '../RandomSCP.htm/index.htm',
      'https://github.com/iterami/SC-AI.cpp',
      'https://github.com/iterami/WoW-Addons.lua',
      'https://github.com/iterami/WZ2100-AI.js',
    ];

    globalThis.open(
      repos[core_random_integer({
        'max': repos.length,
      })],
      core_storage_data['target']
    );
}

function random_simulation(){
    const repos = [
      '../9YG0E6r.htm/index.htm',
      '../Aquarium-2D.htm/index.htm',
      '../Clock.htm/index.htm',
      '../ColorDrops.htm/index.htm',
      '../ColorSquares.htm/index.htm',
      '../ColorSteps.htm/index.htm',
      '../ColorWaves.htm/index.htm',
      '../D2LoD-ArcaneSanctuary.htm/index.htm',
      '../DotEyeIllusion.htm/index.htm',
      '../Fireworks-2D.htm/index.htm',
      '../GradientIllusion.htm/index.htm',
      '../Hallway-2D3D.htm/index.htm',
      '../LayeredSnake-2D3D.htm/index.htm',
      '../ParticleRun-2D.htm/index.htm',
      '../PlusPlus.htm/index.htm',
      '../Poem.htm/index.htm',
      '../QjnyYap.htm/index.htm',
      '../Rain-2D.htm/index.htm',
      '../random_number_test.htm/index.htm',
      '../SnowyMountains.htm/index.htm',
      '../SolarSystem-2D.htm/index.htm',
      '../Starfield-2D3D.htm/index.htm',
      '../TimeColors.htm/index.htm',
      '../Trains-2D.htm/index.htm',
      '../Tubes-2D3D.htm/index.htm',
      '../Warped.htm/index.htm',
    ];

    globalThis.open(
      repos[core_random_integer({
        'max': repos.length,
      })],
      core_storage_data['target']
    );
}

function random_tool(){
    const repos = [
      '../AudioEditor.htm/index.htm',
      '../BaseConverter.htm/index.htm',
      '../BinaryDataEndecoder.htm/index.htm',
      '../ColorSelector.htm/index.htm',
      '../common/index.htm',
      '../Docs.htm/index.htm',
      '../Duel.htm/index.htm',
      '../ESP-Test.htm/index.htm',
      'https://github.com/iterami/EVE-Overviews.yaml',
      '../Finances.htm/index.htm',
      'https://github.com/iterami/GMod-Addons.lua',
      '../Guides.htm/index.htm',
      'https://github.com/iterami/iterami.github.io',
      '../LocalStorage.htm/index.htm',
      '../Math.htm/index.htm',
      'https://github.com/iterami/MC-DataPacks',
      '../MediaDevicesTest.htm/index.htm',
      '../MultiverseEditor.htm/index.htm',
      '../MultiverseViewer.htm/index.htm',
      '../Notes.htm/index.htm',
      '../PasswordGenerator.htm/index.htm',
      '../PixelEditor.htm/index.htm',
      '../Profiler.htm/index.htm',
      '../RandomSCP.htm/index.htm',
      '../ReactionTest.htm/index.htm',
      '../RNG.htm/index.htm',
      '../RomanNumerals.htm/index.htm',
      '../RTS-Boxing.htm/index.htm',
      'https://github.com/iterami/SC-AI.cpp',
      'https://github.com/iterami/Scripts',
      'https://github.com/iterami/TextEditor.gtk',
      '../TextInfo.htm/index.htm',
      '../Time.htm/index.htm',
      '../Timer.htm/index.htm',
      '../UnitConverter.htm/index.htm',
      '../URI.htm/index.htm',
      '../WASD-2D.htm/index.htm',
      '../WindowInfo.htm/index.htm',
      'https://github.com/iterami/WoW-Addons.lua',
      'https://github.com/iterami/WZ2100-AI.js',
    ];

    globalThis.open(
      repos[core_random_integer({
        'max': repos.length,
      })],
      core_storage_data['target']
    );
}
