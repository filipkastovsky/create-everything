import { ncp } from 'ncp';
import { join } from 'path';

export const PACKAGE_PATH = 'create-everything';
export const DEFAULT_PACKAGE = 'helloWorldJs'; // If none is specified, package name will be requiered

const _templatesPath = join(__dirname, 'templates');
export let OptionNames;
(function (OptionNames) {
    OptionNames['template'] = 'template';
    OptionNames['path'] = 'path';
})(OptionNames || (OptionNames = {}));

// Parameterize your cli options
export const builder = (argv) =>
    argv
        .positional(OptionNames.path, {
            type: 'string',
            description: 'Target path',
            demandOption: false,
            default: PACKAGE_PATH || 'create-everything-template',
        })
        .positional(OptionNames.template, {
            alias: 'T',
            type: 'string',
            demandOption: !DEFAULT_PACKAGE,
            description: 'Use a template',
            default: DEFAULT_PACKAGE,
        });

// Customize your message
export const handleCreate = (args) => {
    console.log(`
        Creating new template with 
            template: ${args.template}
                path: ${args.path}
`);
    return new Promise((res, rej) => {
        console.log('Loading...');
        ncp(
            `${_templatesPath}/${args.template}`,
            args.path,
            {
                limit: 16,
            },
            (err) => {
                if (err) {
                    console.error(err);
                    return rej();
                }
                console.log('Success!');

                return res();
            }
        );
    });
};
