import React from 'react'

import { useTranslation } from 'next-i18next'
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

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
        ...(await serverSideTranslations(locale ?? "ko", ['common','index'])),
    },
  })

export default Index;