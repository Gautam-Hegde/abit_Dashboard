import {Gloria_Hallelujah, Inter} from 'next/font/google'

import localFont from 'next/font/local'

const reckless_neue = localFont({ src: './RecklessNeue-Thin.woff2' })

const inter = Inter({ subsets: ["latin"] });
const gloriaHallelujah = Gloria_Hallelujah({
    weight: "400",
    variable: '--font-gloria-hallelujah',
    subsets: ["latin"]
  });

  export {gloriaHallelujah,inter,reckless_neue}