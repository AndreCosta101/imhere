import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {

  const participants = ['Andre', 'Mateus', 'Joao', 'Pedro', 'Lucas', 'Gabriel', 'Ana', 'Juliana', 'Maria', 'Daniela', 'Patricia', 'Joana', 'Julia', 'Michelle'];

  function handleAddParticipant() {
    if(participants.includes('Andre')) {
      return Alert.alert('Já existe um participante na lista com esse nome')
    }
    console.log('Você adicionou um participante');
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert('Remover participante', `Tem certeza que deseja remover ${name}?`, [
      {
        text: 'Não',
        // style: 'cancel' 
      },
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!')
      }
    ])

    console.log(`clicou em remover ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor= '#6B6B6B'
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant 
            key={item}
            name={item}  
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            Ninguem chegou no evento ainda? Adicione participantes à sua lista de presença!
          </Text>
        )}
      />    
    </View>
  );
}