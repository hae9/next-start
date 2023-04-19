import React from 'react';
import styles from './layout.module.css';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '멋진제품 사이트 | 전체 제품 확인',
  description: '전체 제품 확인',
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/products/women">여성옷</Link>
        <Link href="/products/man">남성옷</Link>
      </header>
      <section>{children}</section>
    </>
  );
}
