import React, { useState } from 'react';
import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';
import './App.css'; // Varsayılan stil dosyası

function App() {
  const [connectionStatus, setConnectionStatus] = useState('');

  // Solana ağına bağlanma fonksiyonu
  const connectSolana = async () => {
    try {
      // Solana Devnet'e bağlan
      const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
      
      // Örnek bir program ID'si. Gerçek bir program ID'si ile değiştirin.
      const programId = new PublicKey('33Z9kLziKAbiQ9hzRCX2Gq2k4wT5RnBDXWe5WKtR6XubamIDHere');
      
      console.log("Bağlantı:", connection);
      setConnectionStatus(`Bağlantı başarılı! Program ID: ${programId.toString()}`);
      
      // Burada, bağlantı kurulduktan sonra yapılacak işlemler eklenebilir.
      
    } catch (error) {
      console.error("Bağlantı hatası:", error);
      setConnectionStatus("Solana ağına bağlanırken bir hata oluştu.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Whales DeFi Analytics</h1>
        <p>Büyük Solana yatırımcılarını ve DeFi varlıklarını keşfedin.</p>
        <button onClick={connectSolana}>Solana'ya Bağlan</button>
        {connectionStatus && <p>{connectionStatus}</p>} {/* Bağlantı durumunu göster */}
      </header>
    </div>
  );
}

export default App;
