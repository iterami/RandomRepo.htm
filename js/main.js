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
        13: {
          'todo': generate,
        },
      },
      'title': 'RandomRepository.htm',
    });
}
