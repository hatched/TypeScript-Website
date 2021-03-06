export enum PackageSource {
    Npm = "npm",
    Yarn = "yarn",
    Pnpm = "pnpm",
}

export type Installer = [string, string]

export const Installers: Record<PackageSource, Installer> = {
    [PackageSource.Npm]: ["npm i", "--save-dev"],
    [PackageSource.Yarn]: ["yarn add", "--save-dev"],
    [PackageSource.Pnpm]: ["pnpm add", "--dev"],
}

export const installerOptions = [
    PackageSource.Npm,
    PackageSource.Yarn,
    PackageSource.Pnpm,
] as const
