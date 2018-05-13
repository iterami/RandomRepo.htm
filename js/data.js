'use strict';

function generate(){
    var repositories = {
      '9YG0E6r.htm': 'https://iterami.com/9YG0E6r.htm/',
      'Alarm.htm': 'https://iterami.com/Alarm.htm/',
      'Aquarium-2D.htm': 'https://iterami.com/Aquarium-2D.htm/',
      'AspectRatio.htm': 'https://iterami.com/AspectRatio.htm/',
      'Avoidance-2D.htm': 'https://iterami.com/Avoidance-2D.htm/',
      'BaseConverter.htm': 'https://iterami.com/BaseConverter.htm/',
      'BinaryDataEndecoder.htm': 'https://iterami.com/BinaryDataEndecoder.htm/',
      'Birthday.htm': 'https://iterami.com/Birthday.htm/',
      'Blog.php': 'https://github.com/iterami/Blog.php',
      'Bookmarklets.htm': 'https://iterami.com/Bookmarklets.htm/',
      'Calculator.htm': 'https://iterami.com/Calculator.htm/',
      'ChatBot.py': 'https://github.com/iterami/ChatBot.py',
      'Chrome-iterami': 'https://github.com/iterami/Chrome-iterami',
      'CityMaze.htm': 'https://iterami.com/CityMaze.htm/',
      'Click.htm': 'https://iterami.com/Click.htm/',
      'Clock.htm': 'https://iterami.com/Clock.htm/',
      'ColorDrops.htm': 'https://iterami.com/ColorDrops.htm/',
      'ColorSelector.htm': 'https://iterami.com/ColorSelector.htm/',
      'ColorSquares.htm': 'https://iterami.com/ColorSquares.htm/',
      'ColorSteps.htm': 'https://iterami.com/ColorSteps.htm/',
      'ColorWaves.htm': 'https://iterami.com/ColorWaves.htm/',
      'common': 'https://iterami.com/common/',
      'ConfigFiles': 'https://github.com/iterami/ConfigFiles',
      'ContactForm.php': 'https://github.com/iterami/ContactForm.php',
      'Countdown.htm': 'https://iterami.com/Countdown.htm/',
      'D2LoD-ArcaneSanctuary.htm': 'https://iterami.com/D2LoD-ArcaneSanctuary.htm/',
      'DesertStreetMarket.htm': 'https://iterami.com/DesertStreetMarket.htm/',
      'Documentation.htm': 'https://iterami.com/Documentation.htm/',
      'DotEyeIllusion.htm': 'https://iterami.com/DotEyeIllusion.htm/',
      'Dropdown.htm': 'https://iterami.com/Dropdown.htm/',
      'Drupal-alter_field_maxlength': 'https://github.com/iterami/Drupal-alter_field_maxlength',
      'Drupal-callipepla': 'https://github.com/iterami/Drupal-callipepla',
      'Drupal-delete_ghost_fields': 'https://github.com/iterami/Drupal-delete_ghost_fields',
      'Drupal-disable_window_alert': 'https://github.com/iterami/Drupal-disable_window_alert',
      'Drupal-integer_to_decimal': 'https://github.com/iterami/Drupal-integer_to_decimal',
      'Drupal-move_field_description': 'https://github.com/iterami/Drupal-move_field_description',
      'Drupal-workflow_transitions_roles_fix': 'https://github.com/iterami/Drupal-workflow_transitions_roles_fix',
      'Duel.htm': 'https://iterami.com/Duel.htm/',
      'EmojiText.htm': 'https://iterami.com/EmojiText.htm/',
      'Engine.gtk': 'https://github.com/iterami/Engine.gtk',
      'eog-Plugin-MenuEnhancer': 'https://github.com/iterami/eog-Plugin-MenuEnhancer',
      'ESP-Test.htm': 'https://iterami.com/ESP-Test.htm/',
      'EVETools.gtk': 'https://github.com/iterami/EVETools.gtk',
      'ExperienceCalculator.htm': 'https://iterami.com/ExperienceCalculator.htm/',
      'FakeLogin.php': 'https://github.com/iterami/FakeLogin.php',
      'FileBrowser.gtk': 'https://github.com/iterami/FileBrowser.gtk',
      'Fireworks-2D.htm': 'https://iterami.com/Fireworks-2D.htm/',
      'FractalRunner-2D3D.htm': 'https://iterami.com/FractalRunner-2D3D.htm/',
      'Functions.php': 'https://github.com/iterami/Functions.php',
      'gedit-Plugin-MenuEnhancer': 'https://github.com/iterami/gedit-Plugin-MenuEnhancer',
      'GitHub-API.htm': 'https://iterami.com/GitHub-API.htm/',
      'Guess.htm': 'https://iterami.com/Guess.htm/',
      'Guides.htm': 'https://iterami.com/Guides.htm/',
      'Hallway-2D3D.htm': 'https://iterami.com/Hallway-2D3D.htm/',
      'Hexagons-2D.htm': 'https://iterami.com/Hexagons-2D.htm/',
      'Hrad.htm': 'https://iterami.com/Hrad.htm/',
      'Info.php': 'https://github.com/iterami/Info.php',
      'InterestCalculator.htm': 'https://iterami.com/InterestCalculator.htm/',
      'Inventory.php': 'https://github.com/iterami/Inventory.php',
      'IP.php': 'https://github.com/iterami/IP.php',
      'IssueExport.htm': 'https://iterami.com/IssueExport.htm/',
      'iterami.github.io': 'https://github.com/iterami/iterami.github.io',
      'Jetpack-2D.htm': 'https://iterami.com/Jetpack-2D.htm/',
      'LayeredSnake-2D3D.htm': 'https://iterami.com/LayeredSnake-2D3D.htm/',
      'LocalStorage.htm': 'https://iterami.com/LocalStorage.htm/',
      'Match.htm': 'https://iterami.com/Match.htm/',
      'OS.asm': 'https://github.com/iterami/OS.asm',
      'Particleball-2D.htm': 'https://iterami.com/Particleball-2D.htm/',
      'ParticleRun-2D.htm': 'https://iterami.com/ParticleRun-2D.htm/',
      'PasswordGenerator.htm': 'https://iterami.com/PasswordGenerator.htm/',
      'Percentages.htm': 'https://iterami.com/Percentages.htm/',
      'PixelEditor.htm': 'https://iterami.com/PixelEditor.htm/',
      'Platform-2D.htm': 'https://iterami.com/Platform-2D.htm/',
      'Platform-2D.sh': 'https://github.com/iterami/Platform-2D.sh',
      'Platform-3D.htm': 'https://iterami.com/Platform-3D.htm/',
      'PlusPlus.htm': 'https://iterami.com/PlusPlus.htm/',
      'Poem.htm': 'https://iterami.com/Poem.htm/',
      'ProcessEditor': 'https://github.com/iterami/ProcessEditor',
      'QjnyYap.htm': 'https://iterami.com/QjnyYap.htm/',
      'Race-2D.htm': 'https://iterami.com/Race-2D.htm/',
      'Race-3D.htm': 'https://iterami.com/Race-3D.htm/',
      'Rain-2D.htm': 'https://iterami.com/Rain-2D.htm/',
      'Rain-3D.htm': 'https://iterami.com/Rain-3D.htm/',
      'RandomRepository.htm': 'https://iterami.com/RandomRepository.htm/',
      'RandomSCP.htm': 'https://iterami.com/RandomSCP.htm/',
      'ReactionTest.htm': 'https://iterami.com/ReactionTest.htm/',
      'RNG.htm': 'https://iterami.com/RNG.htm/',
      'RockPaperScissors.htm': 'https://iterami.com/RockPaperScissors.htm/',
      'RomanNumerals.htm': 'https://iterami.com/RomanNumerals.htm/',
      'RPG-Above.htm': 'https://iterami.com/RPG-Above.htm/',
      'RPG-Side.htm': 'https://iterami.com/RPG-Side.htm/',
      'RTS-2D.htm': 'https://iterami.com/RTS-2D.htm/',
      'RTS-Boxing.htm': 'https://iterami.com/RTS-Boxing.htm/',
      'SC-AI.cpp': 'https://github.com/iterami/SC-AI.cpp',
      'Scripts': 'https://github.com/iterami/Scripts',
      'Shooter-2D.htm': 'https://iterami.com/Shooter-2D.htm/',
      'Slots.htm': 'https://iterami.com/Slots.htm/',
      'Snakish.htm': 'https://iterami.com/Snakish.htm/',
      'SnowyMountains.htm': 'https://iterami.com/SnowyMountains.htm/',
      'SolarSystem-2D.htm': 'https://iterami.com/SolarSystem-2D.htm/',
      'SpeedButton.htm': 'https://iterami.com/SpeedButton.htm/',
      'SpeedShape.htm': 'https://iterami.com/SpeedShape.htm/',
      'SpeedText.htm': 'https://iterami.com/SpeedText.htm/',
      'SpeedType.htm': 'https://iterami.com/SpeedType.htm/',
      'Starfield-2D3D.htm': 'https://iterami.com/Starfield-2D3D.htm/',
      'Starfield-3D.htm': 'https://iterami.com/Starfield-3D.htm/',
      'Sudoku.htm': 'https://iterami.com/Sudoku.htm/',
      'SurrealIntermission.htm': 'https://iterami.com/SurrealIntermission.htm/',
      'TemplateEngine-Lite.php': 'https://github.com/iterami/TemplateEngine-Lite.php',
      'TemplateEngine.php': 'https://github.com/iterami/TemplateEngine.php',
      'TextEditor.gtk': 'https://github.com/iterami/TextEditor.gtk',
      'TextInfo.htm': 'https://iterami.com/TextInfo.htm/',
      'ThemePark-3D.htm': 'https://iterami.com/ThemePark-3D.htm/',
      'Time.htm': 'https://iterami.com/Time.htm/',
      'TimeColors.htm': 'https://iterami.com/TimeColors.htm/',
      'Timer.htm': 'https://iterami.com/Timer.htm/',
      'TinyMCE-Editor.htm': 'https://iterami.com/TinyMCE-Editor.htm/',
      'Trains.gtk': 'https://github.com/iterami/Trains.gtk',
      'Trains-2D.htm': 'https://iterami.com/Trains-2D.htm/',
      'Trains-3D.htm': 'https://iterami.com/Trains-3D.htm/',
      'Trigonometry.htm': 'https://iterami.com/Trigonometry.htm/',
      'Tubes-2D3D.htm': 'https://iterami.com/Tubes-2D3D.htm/',
      'U1.htm': 'https://iterami.com/U1.htm/',
      'UnitConverter.htm': 'https://iterami.com/UnitConverter.htm/',
      'URIViewer.htm': 'https://iterami.com/URIViewer.htm/',
      'Vidce.htm': 'https://iterami.com/Vidce.htm/',
      'Warped.htm': 'https://iterami.com/Warped.htm/',
      'WASD-2D.htm': 'https://iterami.com/WASD-2D.htm/',
      'WASD-3D.htm': 'https://iterami.com/WASD-3D.htm/',
      'WebScraper.py': 'https://github.com/iterami/WebScraper.py',
      'WebServer.py': 'https://github.com/iterami/WebServer.py',
      'Wiki.php': 'https://github.com/iterami/Wiki.php',
      'WindowInfo.htm': 'https://iterami.com/WindowInfo.htm/',
      'WZ2100-AI.js': 'https://github.com/iterami/WZ2100-AI.js',
    };

    window.open(
      repositories[core_random_key({
        'object': repositories,
      })],
      '_blank'
    );
}
