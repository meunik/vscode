import { ref, onMounted } from 'vue';
import api from '@/services/api';

export function useCurriculo() {
  const curriculo = ref(null);
  const loading = ref(true);
  const error = ref(null);

  const carregarCurriculo = async () => {
    try {
      loading.value = true;
      error.value = null;
      curriculo.value = await api.getCurriculo();
    } catch (err) {
      error.value = err.message;
      console.error('Erro ao carregar currículo:', err);
    } finally {
      loading.value = false;
    }
  };

  onMounted(carregarCurriculo);

  return { curriculo, loading, error, carregarCurriculo };
}

export function useServers() {
  const servers = ref([]);
  const loading = ref(true);
  const error = ref(null);

  const carregarServers = async () => {
    try {
      loading.value = true;
      error.value = null;
      servers.value = await api.getServers();
    } catch (err) {
      error.value = err.message;
      console.error('Erro ao carregar servers:', err);
    } finally {
      loading.value = false;
    }
  };

  onMounted(carregarServers);

  return { servers, loading, error, carregarServers };
}

export function useSetup() {
  const setup = ref(null);
  const loading = ref(true);
  const error = ref(null);

  const carregarSetup = async () => {
    try {
      loading.value = true;
      error.value = null;
      setup.value = await api.getSetup();
    } catch (err) {
      error.value = err.message;
      console.error('Erro ao carregar setup:', err);
    } finally {
      loading.value = false;
    }
  };

  onMounted(carregarSetup);

  return { setup, loading, error, carregarSetup };
}
