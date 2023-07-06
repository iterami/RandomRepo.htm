'use strict';

function repo_init(){
    core_repo_init({
      'keybinds': {
        13: {
          'todo': random_any,
        },
        49: {
          'todo': random_game,
        },
        50: {
          'todo': random_simulation,
        },
        51: {
          'todo': random_tool,
        },
        52: {
          'todo': random_iterami,
        },
        53: {
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
