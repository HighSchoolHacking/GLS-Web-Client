import { Command as GlsCommand, CommandsBag, ConversionContext, TypeScript } from "general-language-syntax";
import { action, observable } from "mobx";

import { IStorageWrapper } from "../../../storage/storagewrapper";
import { stored } from "../../../storage/stored";
import { storing } from "../../../storage/storing";

/**
 * Store for an input bar component.
 */
@storing<CommandsListStore>(store => store.storageWrapper)
export class CommandsListStore {
    /**
     * Sample name the user is editing from.
     */
    @stored("")
    public filter: string;

    /**
     * @param filter   A new filter on the visible commands.
     */
    @action
    public readonly setFilter = (filter: string): void => {
        this.filter = filter;
    }

    /**
     * Commands to be listed.
     */
    public readonly commands: { [i: string]: GlsCommand } = CommandsListStore.getCommands();

    /**
     * Wrapper for persistent items kept in a Storage object.
     */
    private readonly storageWrapper: IStorageWrapper;

    /**
     * Initializes a new instance of the InputBarStore class.
     * 
     * @param storageWrapper   Wrapper for persistent items kept in a Storage object.
     */
    public constructor(storageWrapper: IStorageWrapper) {
        this.storageWrapper = storageWrapper;
    }

    /**
     * @returns All available commands.
     */
    private static getCommands(): { [i: string]: GlsCommand } {
        const conversionContext: ConversionContext = new ConversionContext(new TypeScript());
        const commandsBag: CommandsBag = CommandsBag.forContext(conversionContext);

        return commandsBag.getCommands();
    }
}