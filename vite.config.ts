import nkzw from '@nkzw/oxlint-config/with-sorting';
import { defineConfig } from 'vite-plus';

export default defineConfig({
  fmt: {
    ignorePatterns: ['lib', 'node_modules', 'pnpm-lock.yaml'],
    singleQuote: true,
    sortImports: {
      newlinesBetween: false,
    },
    sortPackageJson: {
      sortScripts: true,
    },
  },
  lint: {
    extends: [nkzw],
    ignorePatterns: ['lib/'],
    options: { typeAware: true, typeCheck: true },
  },
  run: {
    tasks: {
      'test:all': {
        command: 'vp check && vp test',
      },
    },
  },
  staged: {
    '*': 'vp check --fix',
  },
});
