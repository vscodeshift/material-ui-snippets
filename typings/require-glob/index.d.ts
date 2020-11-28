declare module 'require-glob' {
  export default function async(
    path: string,
    options?: {
      reducer?: (
        options: Record<string, any>,
        result: Record<string, any>,
        file: { path: string; exports: any }
      ) => Record<string, any>
    }
  ): Promise<Record<string, any>>
  export function sync(
    path: string,
    options?: {
      reducer?: (
        options: Record<string, any>,
        result: Record<string, any>,
        file: { path: string; exports: any }
      ) => Record<string, any>
    }
  ): Record<string, any>
}
