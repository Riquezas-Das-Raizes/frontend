import toast, { Toaster } from 'react-hot-toast';

// const notify = () => toast('Here is your toast.');

// const App = () => {
//   return (
//     <div>
//       <button onClick={notify}>Make me a toast</button>
//       <Toaster />
//     </div>
//   );
// };

export function hotAlerta(mensagem: string, tipo: string){
    switch (tipo){
        case 'sucesso':
          toast.success(mensagem,{
            position: 'top-right',
            style: {
                border: '1px solid rgb(255,255,255)',
                padding: '16px',
                color: 'rgb(255,255,255)',
                background: 'rgb(116,136,79)'

            },
            icon: '✅'
            
          });
          break;

          case 'info':
            toast.error(mensagem,{
                position: 'top-right', //case info na real
                style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#713200',
                    background: 'rgb(240,234,210)'
                    
                },
                icon: '🧐'
            });
            break;

            case 'erro':
                toast.error(mensagem, {
                    position: 'top-right',
                    
                    style: {
                        border: '1px solid rgb(113, 63, 18)',
                        padding: '16px',
                        color: 'rgb(255,255,255)',
                        background: 'rgb(185, 28, 28)'
                    },
                    icon: '❌'
                })
    }
}