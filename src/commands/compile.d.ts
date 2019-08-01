import Command from "@oclif/command";
export declare class Compile extends Command {
    static description: string;
    static strict: boolean;
    run(): Promise<void>;
}
