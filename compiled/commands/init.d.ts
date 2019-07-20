import Command from "@oclif/command";
export declare class Init extends Command {
    static description: string;
    run(): Promise<void>;
    private initTsconfig;
}
