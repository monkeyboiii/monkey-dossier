import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComment() {
    const { colorMode } = useColorMode();

    return (
        <Giscus
            repo="monkeyboiii/monkey-dossier"
            repoId="R_kgDOO_Z5WQ"
            category="Announcements"
            categoryId="DIC_kwDOO_Z5Wc4Crzev"
            mapping="pathname"
            strict="1"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            theme={colorMode}
            lang="en"
            loading="lazy"
            // @ts-expect-error: the below two are not in the .d.ts file
            crossorigin="anonymous"
            async
        />
    );
}