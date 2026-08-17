// Author: KRCat
// Calculator
registerCommand('calc', function(args, print) {
    try {
        const result = eval(args.join(' '));
        print('= ' + result, 'success');
    } catch {
        print('Invalid expression', 'error');
    }
});
