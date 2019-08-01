import Command from "@oclif/command";
export declare class Lint extends Command {
    static description: string;
    static strict: boolean;
    run(): Promise<void>;
}
