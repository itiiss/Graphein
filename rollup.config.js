import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/graphein.js',
      format: 'cjs',
    },
    {
      file: 'esm/graphein.js',
      format: 'es',
    },
    {
      file: 'dist/graphein.min.js',
      name: 'sp',
      format: 'umd',
    },
  ],
  plugins: [
    resolve(),
    babel(),
  ],
};
