import { useState, useEffect, FormEvent, useRef } from 'react';
import { BotMessageSquare } from 'lucide-react';
import ChatOptions from './ChatOptions';
import '../../styles/Chat.scss';
import { JSX } from 'react';

interface Message {
  sender: 'user' | 'bot';
  text: string | JSX.Element;
}

interface UserInfo {
  email: string;
  nome: string;
  numero: string;
}

type Step = 'email' | 'nome' | 'numero' | 'chat';

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};


const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\(?\d{2}\)?[\s.-]?\d{4,5}[\s.-]?\d{4}$/;
  return phoneRegex.test(phone);
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState<Step>('email');
  const [userInfo, setUserInfo] = useState<UserInfo>({ email: '', nome: '', numero: '' });
  const [isLoading, setIsLoading] = useState(false); 

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
   
    setIsLoading(true);
    setTimeout(() => {
      setMessages([{ sender: 'bot', text: 'Olá! Vamos começar com o seu cadastro. Qual seu email?' }]);
      setIsLoading(false); 
    }, 2000);
  }, []);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleOptionSelect = (option: string) => {
    setIsLoading(true);
    setTimeout(() => {
      const botResponse = generateBotResponse(option);
      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
      setIsLoading(false); 
    }, 2000); 
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const value = input.trim();
    if (!value) return;

    setInput('');
    setMessages((prev) => [...prev, { sender: 'user', text: value }]);

    if (step === 'chat') {
      handleOptionSelect(value); // Chama a função de carregamento para opções válidas ou inválidas
      return;
    }

    switch (step) {
      case 'email':
        if (!validateEmail(value)) {
          setIsLoading(true); 
          setTimeout(() => {
            setMessages((prev) => [...prev, { sender: 'bot', text: 'Email inválido. Tente novamente.' }]);
            setIsLoading(false); 
          }, 2000);
          return;
        }
        setUserInfo((prev) => ({ ...prev, email: value }));
        setIsLoading(true);
        setTimeout(() => {
          setMessages((prev) => [...prev, { sender: 'bot', text: 'Ótimo! Agora informe seu nome completo:' }]);
          setStep('nome');
          setIsLoading(false);
        }, 2000);
        break;

      case 'nome':
        setUserInfo((prev) => ({ ...prev, nome: value }));
        setIsLoading(true);
        setTimeout(() => {
          setMessages((prev) => [...prev, { sender: 'bot', text: 'Perfeito! Agora me diga seu número de telefone:' }]);
          setStep('numero');
          setIsLoading(false);
        }, 2000);
        break;

      case 'numero':
        if (!validatePhone(value)) {
          setIsLoading(true);
          setTimeout(() => {
            setMessages((prev) => [...prev, { sender: 'bot', text: 'Número inválido. Exemplo válido: (11) 91234-5678' }]);
            setIsLoading(false); 
          }, 2000);
          return;
        }
        const updatedInfo = { ...userInfo, numero: value };
        setUserInfo(updatedInfo);
        setIsLoading(true);
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { sender: 'bot', text: `Cadastro completo! Bem-vindo, ${updatedInfo.nome}!` },
          ]);
          setStep('chat');
          setIsLoading(false);
        }, 2000);
        break;
    }
  };

  const generateBotResponse = (option: string): string | JSX.Element => {
    switch (option) {
      case '1':
        return 'Os jogadores atuais são: KSCERATO, yuurih, chelo, arT e FalleN.';
      case '2':
        return (
          <>
            Os próximos jogos estão próximos. Fique ligado no{' '}
            <a href="https://www.instagram.com/furiagg/" target="_blank" rel="noopener noreferrer">
              site oficial
            </a>
            !
          </>
        );
      case '3':
        return 'A FURIA foi campeã de diversos torneios nacionais e internacionais!';
      case '4':
        return 'A FURIA foi fundada em 2017 e é uma das principais equipes de CS do Brasil.';
      case '5':
        return 'Curiosidade: O nome FURIA vem da ideia de jogar com intensidade e paixão!';
      default:
        return 'Opção inválida. Por favor, escolha um número de 1 a 5.';
    }
  };

  return (
    <div className="chat">
      <div className="chat_messages">
      {messages.map((msg, index) => (
  <p key={index} className={msg.sender === 'bot' ? 'chat_bot' : 'chat_user'}>
    {msg.sender === 'bot' && <BotMessageSquare size={20} className="chat_bot_icon" />}
    {typeof msg.text === 'string' ? (
      msg.text.split('\n').map((line, i) => (
        <span key={i}>
          {line}
          <br />
        </span>
      ))
    ) : (
      msg.text
    )}
  </p>
))}
        {isLoading && (
          <p className="chat_bot loading">
            <span></span>
            <span></span>
            <span></span>
          </p>
        )}
        <div ref={bottomRef} />
      </div>

      {step !== 'chat' && (
        <form className="chat_input" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite aqui..."
            disabled={isLoading} // Desabilita o input enquanto está carregando
          />
          <button type="submit" disabled={isLoading}>
            Enviar
          </button>
        </form>
      )}

      {step === 'chat' && (
        <ChatOptions
          onSelect={(option) => {
            handleOptionSelect(option); // Chama a função ao selecionar uma opção
          }}
        />
      )}
    </div>
  );
};

export default Chat;
