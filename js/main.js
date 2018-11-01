'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'generate': {
          'onclick': generate,
        },
        'generate-games': {
          'onclick': generate_game,
        },
        'generate-github': {
          'onclick': generate_github,
        },
        'generate-iterami': {
          'onclick': generate_iterami,
        },
        'generate-simulations': {
          'onclick': generate_simulation,
        },
        'generate-tools': {
          'onclick': generate_tool,
        },
      },
      'keybinds': {
        49: {
          'todo': generate,
        },
        50: {
          'todo': generate_game,
        },
        51: {
          'todo': generate_simulation,
        },
        52: {
          'todo': generate_tool,
        },
        53: {
          'todo': generate_iterami,
        },
        54: {
          'todo': generate_github,
        },
      },
      'title': 'RandomRepository.htm',
    });
}
