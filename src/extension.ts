import * as vscode from 'vscode'
import Creator from './Creator'

export function activate(context: vscode.ExtensionContext) {
    let creator: Creator = new Creator()

    let createClass = vscode.commands.registerCommand('phpCreateClass.createClass', (folder) => creator.createFile('class', folder))
    let createInterface = vscode.commands.registerCommand('phpCreateClass.createInterface', (folder) => creator.createFile('interface', folder))
    let createTrait = vscode.commands.registerCommand('phpCreateClass.createTrait', (folder) => creator.createFile('trait', folder))

    context.subscriptions.push(createClass)
    context.subscriptions.push(createInterface)
    context.subscriptions.push(createTrait)
}

export function deactivate() {}
