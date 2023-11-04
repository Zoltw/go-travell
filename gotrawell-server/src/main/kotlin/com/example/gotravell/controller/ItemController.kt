package com.example.gotravell.controller

import com.example.gotravell.entity.Item
import com.example.gotravell.service.ItemService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/items")
class ItemController(private val itemService: ItemService) {

    @GetMapping
    fun getAllItems(): ResponseEntity<List<Item>> = ResponseEntity.ok(itemService.findAllItems())

    @PostMapping
    fun createNewItem(@RequestBody item: Item): ResponseEntity<Item> = ResponseEntity.ok(itemService.addItem(item))

    @GetMapping("/{id}")
    fun getItemById(@PathVariable id: Long): ResponseEntity<Item> = ResponseEntity.ok(itemService.getItemById(id))

    @PutMapping("/{id}")
    fun updateItem(@PathVariable id: Long, @RequestBody item: Item): ResponseEntity<Item> {
        return if (item.id == id) {
            ResponseEntity.ok(itemService.updateItem(item))
        } else {
            ResponseEntity.badRequest().build()
        }
    }

    @DeleteMapping("/{id}")
    fun deleteItem(@PathVariable id: Long): ResponseEntity<Void> {
        itemService.deleteItemById(id)
        return ResponseEntity.noContent().build()
    }
}
