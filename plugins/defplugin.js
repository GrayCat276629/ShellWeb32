// ShellWeb32 Default Plugin
// This is a template for creating plugins

registerCommand('custom-cmd', function(args, print, currentUser, currentNickname) {
    print('Hello, its custom commands, logic, etc...', 'plugin');
    // Type your codes here...
    // You can use args, print, currentUser, currentNickname
    // Example: print('Arguments: ' + args.join(' '));
});

// You can register more commands here
registerCommand('another-cmd', function(args, print, currentUser, currentNickname) {
    print('Another command executed!', 'plugin');
    // Your logic here...
});

// This code runs immediately when plugin loads
print('Default plugin loaded successfully!', 'plugin');
