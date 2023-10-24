'use strict';

function open_local(repos){
    const repo = repos[core_random_integer({
      'max': repos.length,
    })];
    globalThis.open(
      '../' + repo + '/index.htm',
      core_storage_data['target']
    );
}

function random_any(){
    const types = [
      'game',
      'github',
      'local',
      'simulation',
      'tool',
    ];
    globalThis['random_' + types[core_random_integer({
      'max': types.length,
    })]]();
}

function random_game(){
    open_local([
      'BlindMouse.htm',
      'Click.htm',
      'Countdown.htm',
      'Dropdown.htm',
      'FractalRunner-2D3D.htm',
      'Guess.htm',
      'Hexagons-2D.htm',
      'Hrad.htm',
      'Jetpack-2D.htm',
      'Match.htm',
      'Multiverse.htm',
      'Particleball-2D.htm',
      'RockPaperScissors.htm',
      'Slots.htm',
      'Snakish.htm',
      'SpeedButton.htm',
      'SpeedShape.htm',
      'SpeedText.htm',
      'SpeedType.htm',
      'Sudoku.htm',
      'U1.htm',
    ]);
}

function random_github(){
    const repos = [
      'https://github.com/iterami/iterami.github.io',
      'https://github.com/iterami/Scripts',
      'https://github.com/iterami/TextEditor.gtk',
    ];
    globalThis.open(
      repos[core_random_integer({
        'max': repos.length,
      })],
      core_storage_data['target'],
      'noreferrer'
    );
}

function random_local(){
    open_local([
      '9YG0E6r.htm',
      'Aquarium-2D.htm',
      'AudioEditor.htm',
      'BaseConverter.htm',
      'BinaryDataEndecoder.htm',
      'BlankPage.htm',
      'BlindMouse.htm',
      'Click.htm',
      'Clock.htm',
      'ColorDrops.htm',
      'ColorSelector.htm',
      'ColorSquares.htm',
      'ColorSteps.htm',
      'ColorWaves.htm',
      'common',
      'Countdown.htm',
      'D2LoD-ArcaneSanctuary.htm',
      'Docs.htm',
      'DotEyeIllusion.htm',
      'Dropdown.htm',
      'Duel.htm',
      'ESP-Test.htm',
      'Finances.htm',
      'Fireworks-2D.htm',
      'FractalRunner-2D3D.htm',
      'GradientIllusion.htm',
      'Guess.htm',
      'Hallway-2D3D.htm',
      'Hexagons-2D.htm',
      'Hrad.htm',
      'Jetpack-2D.htm',
      'LayeredSnake-2D3D.htm',
      'LocalStorage.htm',
      'Match.htm',
      'Math.htm',
      'MediaDevicesTest.htm',
      'Multiverse.htm',
      'MultiverseEditor.htm',
      'MultiverseViewer.htm',
      'Notes.htm',
      'Particleball-2D.htm',
      'ParticleRun-2D.htm',
      'PasswordGenerator.htm',
      'PixelEditor.htm',
      'PlusPlus.htm',
      'Poem.htm',
      'Profiler.htm',
      'QjnyYap.htm',
      'Rain-2D.htm',
      'random_number_test.htm',
      'ReactionTest.htm',
      'RNG.htm',
      'RockPaperScissors.htm',
      'RomanNumerals.htm',
      'RTS-Boxing.htm',
      'Slots.htm',
      'Snakish.htm',
      'SnowyMountains.htm',
      'SolarSystem-2D.htm',
      'SpeedButton.htm',
      'SpeedShape.htm',
      'SpeedText.htm',
      'SpeedType.htm',
      'Starfield-2D3D.htm',
      'Sudoku.htm',
      'TextInfo.htm',
      'Time.htm',
      'TimeColors.htm',
      'Timer.htm',
      'Trains-2D.htm',
      'Tubes-2D3D.htm',
      'U1.htm',
      'UnitConverter.htm',
      'URI.htm',
      'Warped.htm',
      'WASD-2D.htm',
      'WindowInfo.htm',
    ]);
}

function random_simulation(){
    open_local([
      '9YG0E6r.htm',
      'Aquarium-2D.htm',
      'Clock.htm',
      'ColorDrops.htm',
      'ColorSquares.htm',
      'ColorSteps.htm',
      'ColorWaves.htm',
      'D2LoD-ArcaneSanctuary.htm',
      'DotEyeIllusion.htm',
      'Fireworks-2D.htm',
      'GradientIllusion.htm',
      'Hallway-2D3D.htm',
      'LayeredSnake-2D3D.htm',
      'ParticleRun-2D.htm',
      'PlusPlus.htm',
      'Poem.htm',
      'QjnyYap.htm',
      'Rain-2D.htm',
      'random_number_test.htm',
      'SnowyMountains.htm',
      'SolarSystem-2D.htm',
      'Starfield-2D3D.htm',
      'TimeColors.htm',
      'Trains-2D.htm',
      'Tubes-2D3D.htm',
      'Warped.htm',
    ]);
}

function random_tool(){
    open_local([
      'AudioEditor.htm',
      'BaseConverter.htm',
      'BinaryDataEndecoder.htm',
      'BlankPage.htm',
      'ColorSelector.htm',
      'common',
      'Docs.htm',
      'Duel.htm',
      'ESP-Test.htm',
      'Finances.htm',
      'LocalStorage.htm',
      'Math.htm',
      'MediaDevicesTest.htm',
      'MultiverseEditor.htm',
      'MultiverseViewer.htm',
      'Notes.htm',
      'PasswordGenerator.htm',
      'PixelEditor.htm',
      'Profiler.htm',
      'ReactionTest.htm',
      'RNG.htm',
      'RomanNumerals.htm',
      'RTS-Boxing.htm',
      'TextInfo.htm',
      'Time.htm',
      'Timer.htm',
      'UnitConverter.htm',
      'URI.htm',
      'WASD-2D.htm',
      'WindowInfo.htm',
    ]);
}

function repo_init(){
    core_repo_init({
      'keybinds': {
        'Enter': {
          'todo': random_any,
        },
        'Digit1': {
          'todo': random_game,
        },
        'Digit2': {
          'todo': random_simulation,
        },
        'Digit3': {
          'todo': random_tool,
        },
        'Digit4': {
          'todo': random_local,
        },
        'Digit5': {
          'todo': random_github,
        },
      },
      'storage': {
        'target': '_blank',
      },
      'storage-menu': '<table><tr><td><input id=target type=text><td>Target</table>',
      'title': 'RandomRepo.htm',
    });
}
