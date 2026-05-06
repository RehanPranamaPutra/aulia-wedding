import WhatsAppGenerator from '@/app/components/WhatsAppGenerator';

export const metadata = {
  title: 'Link Generator - Aulia Wedding',
};

export default function LinkGeneratorPage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-maroon/20">
      <WhatsAppGenerator />
    </main>
  );
}
