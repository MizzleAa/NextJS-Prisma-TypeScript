import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { GetStaticProps } from 'next'

const Index: React.FC = () => {
    const { t } = useTranslation('index');
    return (
        <div>
            {t('content')}
        </div>
    )
}

export const getStaticProps:GetStaticProps = async ({locale}) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "ko", ['index'])),
    },
})

export default Index;