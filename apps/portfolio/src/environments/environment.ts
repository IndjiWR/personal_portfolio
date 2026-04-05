/**
 * Environment configuration for the portfolio app.
 *
 * Set `mode` to:
 * - 'production' → Shows only projects with `production: true`
 * - 'local' → Shows only projects with `local: true`
 *
 * Use this to preview production state locally without deploying.
 */
export const environment = {
  /**
   * Current environment mode.
   * Change this to preview different project sets during development.
   */
  mode: 'local' as 'local' | 'production',

  /**
   * Whether we're in a development build.
   * Automatically set based on build configuration.
   */
  isDevMode: true,
};