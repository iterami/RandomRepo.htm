'use strict';

function repo_init(){
    core_repo_init({
      'keybinds': {
        49: {
          'todo': random_any,
        },
        50: {
          'todo': random_game,
        },
        51: {
          'todo': random_simulation,
        },
        52: {
          'todo': random_thirdparty,
        },
        53: {
          'todo': random_tool,
        },
        54: {
          'todo': random_iterami,
        },
        55: {
          'todo': random_github,
        },
      },
      'storage': {
        'target': '_blank',
      },
      'storage-menu': '<table><tr><td><input id=target><td>Target</table>',
      'title': 'RandomRepository.htm',
    });
}
