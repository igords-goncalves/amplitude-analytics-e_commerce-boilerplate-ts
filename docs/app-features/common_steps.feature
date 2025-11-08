# Common canonical step templates for this project's Gherkin scenarios.
# Use these phrasings across all feature files to improve reusability and
# reduce near-duplicates. These are reference steps (not executable).

# CART / CHECKOUT
# Given o carrinho contém {count} item(s)
# When o usuário adiciona {quantity}x o produto com id "{id}" ao carrinho
# When o usuário adiciona um produto ao carrinho
# When o usuário clica no botão "add-to-cart-btn" (ou) "add-to-cart-btn" {times} vezes
# When o usuário clica no botão "buy-now-btn" do product card [com quantidade {n}]
# When a página é recarregada

# PERSISTENCE / MULTI-TAB
# Given o usuário tem duas abas abertas da aplicação
# When o usuário adiciona um item em uma aba
# Then a outra aba deve atualizar o estado do carrinho automaticamente

# ANALYTICS
# Then um evento "<event_name>" deve ser rastreado
# Then o payload deve conter order_id, total_amount, currency e lista_de_items

# OFFLINE / RETRY
# Given o dispositivo está offline
# Then eventos ficam enfileirados localmente
# When a conexão é restabelecida
# Then os eventos enfileirados são enviados na ordem correta

# EXPERIMENTS
# Given o experiment "<key>" está configurado
# Then um evento "experiment_view" deve ser rastreado com key "<key>"

# A11Y / SECURITY / PERFORMANCE
# Use concise, authoritative phrasing for checks (keyboard navigation, axe-core runs, XSS checks).
